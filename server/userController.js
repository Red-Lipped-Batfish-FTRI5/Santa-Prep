const User = require('./userModel')

const UserController = {}
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  UserController.createUser = (req, res, next) => {
    const { name, email, username, password } = req.body;
    User.create({ name, email, username, password })
      .then(newUser => {
        res.locals.user_id = newUser.id;
        return next();
      })
      .catch(err => {
        return res
          .set('Content-Type', 'text/plain')
          .status(400)
          .send(`UserController.createUser Error: ${err}`);
      });
    }



UserController.verifyUser = (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  User.findOne({ username: username })
  .then(newUser => { 
    if (password === newUser.password) {
      res.locals.user_id = newUser.id;
      return next();
    }
    else { 
      res.redirect('/SignUp');
      return next('userController.verifyUser: Passwords did not match') 
    }
  })
  .catch(err => {
    console.log('Err:', err);
  })
};


module.exports = UserController;