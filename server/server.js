const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel')
const app = express()
const userController = require('./userController')
const PORT = 3000;

mongoose.connect('mongodb+srv://scratch:britpeytonrossnickFTRI5@scratchproject.rqthe.mongodb.net/scratchproject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = express.Router();
app.use('/', userRouter);

userRouter.post('/SignUp', userController.createUser);

app.post(
    "/Login",
    userController.verifyUser,
    (req, res) => {
      // what should happen here on successful log in?
      if (!res.locals.user) return res.send(`Username does not exist`);
      if (res.locals.user.password !== req.body.password)
        return res.send(`Password is incorrect`);
        //need to redirect to homepage
      if (res.locals.user.password === req.body.password) res.redirect('/Dashboard')
    }
  );




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;