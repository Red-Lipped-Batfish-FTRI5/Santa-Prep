const User = require('./userModel')

const UserController = {}
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  UserController.createUser = (req, res) => {
    const { name, email, username, password } = req.body;
    User.create({ name, email, username, password })
      .then(newUser => {
        return res
          .set('Content-Type', 'application/json')
          .send(newUser);
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
  const { username } = req.body;
  User.findOne({ username })
    .then((User) => {
      res.locals.user = User;
      next();
    })
    .catch((err) => next(err));
}

module.exports = UserController;