const User = require('./userModel')

const UserController = {
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createUser(req, res) {
    const { name, email, username, password } = req.body;
    console.log(req.body)
    User.create({ name, email, username, password }, console.log('before then'))
      .then(newUser => {
          console.log('after then')
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
  },
    


  getUser(req, res) {
    const name = req.params.name;
    User.findOne({ firstName: name })
      .then(foundUser => {
        if (foundUser) {
          return res
            .set('Content-Type', 'application/json')
            .status(200)
            .send(foundUser);
        }
        else {
          return res
            .set('Content-Type', 'text/plain')
            .status(400)
            .send(`StudentController.getStudent error: Could not find student with name ${name}`);
        }
      })
      .catch(err => {
        return res
          .set('Content-Type', 'text/plain')
          .status(400)
          .send(`getStudent error: ${err}`);
      });
  },

}



module.exports = UserController;