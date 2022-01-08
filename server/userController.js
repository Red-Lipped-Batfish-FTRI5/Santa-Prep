
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