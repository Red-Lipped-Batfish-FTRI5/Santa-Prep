// const User = require('./userModel')

// const UserController = {}
//   // Create a new student in the Database
//   // Their information will be sent in the request body
//   // This should send the created student
//   UserController.createUser = (req, res, next) => {
//     const { name, email, username, password } = req.body;
//     User.create({ name, email, username, password })
//       .then(newUser => {
//         res.locals.user_id = newUser.id;
//         return next();
//       })
//       .catch(err => {
//         return res
//           .set('Content-Type', 'text/plain')
//           .status(400)
//           .send(`UserController.createUser Error: ${err}`);
//       });
//     }



// UserController.verifyUser = (req, res, next) => {
//   // write code here
//   const { username, password } = req.body;
//   User.findOne({ username: username })
//   .then(newUser => { 
//     if (password === newUser.password) {
//       res.locals.user_id = newUser.id;
//       return next();
//     }
//     else { 
//       res.redirect('/SignUp');
//       return next('userController.verifyUser: Passwords did not match') 
//     }
//   })
//   .catch(err => {
//     console.log('Err:', err);
//   })
// };


// module.exports = UserController;




//Start SQL
const path = require('path');
const db = require('./userModel.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userController = {};

userController.createUser = async (req, res, next) => {
  const {name, email, password} = req.body; //destructure name email and pwd from req body
  //sql statement
  try{
    const hashPassword = bcrypt.hashSync(password, 10);
    const SQL = `INSERT INTO ParentUser (name, email, password) 
    VALUES ($1, $2, $3,)
    RETURNING *`;//values are left for params to fill
  
    const params = [name, email, hashPassword]; //make an array from what was destructured from request body
    const results = await db.query(SQL, params);//db is queried with SQL statement, but with params to fill the $ variables
    res.locals.users = await results.rows[0].userid

    const token = jwt.sign({user: results.rows[0].userid}, "abc", {expiresIn: "5hr"});

    res.cookie("token", token, {
      httpOnly: true
    })
    next();
  } catch(err) {
    console.log(err);
    next({
      log: err
    })
  }
}


userController.verifyUser = async (req, res, next) => {
const {email, password} = req.body
console.log(req.body)
try{
 const SQL = `SELECT * FROM ParentUser WHERE email = '${email}'`;
 console.log('before query')

const result = await db.query(SQL);
console.log(result)
console.log('after query')


const compare = bcrypt.compare(password, result.rows[0].password)
  if(!compare){
    return next({log: 'Incorrect Password'})
  } 
  const token = jwt.sign({user: results.rows[0].userid}, "abc", {expiresIn: "5hr"});

  res.cookie("token", token, {
    httpOnly: true
  })
  return next()
  }
  catch(err) {
    console.log(err);
    next({
      log: err
    })
  }
}

userController.createChild = async (req, res, next) => {
 const { parent_id, child_name} = req.body;
try{
  const SQL = `INSERT INTO childUser (parent_id, child_name)
  VALUES ($1, $2)
  RETURNING *`;

  const params = [parent_id, child_name];
  const results = await db.query(SQL, params);
  next();
}
catch(err) {
  console.log(err);
  next({
    log: err
  })
}



}


module.exports = userController;