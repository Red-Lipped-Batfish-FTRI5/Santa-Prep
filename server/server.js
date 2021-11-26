const express = require('express');
// const mongoose = require('mongoose');
const app = express()
// const cookieParser = require('cookie-parser');
const userController = require('./userController')
// const cookieController = require('./cookieController');

const PORT = 3000;

// mongoose.connect('mongodb+srv://scratch:britpeytonrossnickFTRI5@scratchproject.rqthe.mongodb.net/scratchproject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());


// const userRouter = express.Router();
// app.use('/api', userRouter);

app.post('/api/SignUp', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.users);
});

app.post('/api/Login', userController.verifyUser, (req, res) => {
  res.status(200).send('User logged in')
  });


app.post('/api/CreateChild', userController.createChild, (req, res) => {
   res.status(200).json(res.locals.children);
 });
      // if (!res.locals.user) return res.send(`Username does not exist`);
      // if (res.locals.user.password !== req.body.password)
      //   return res.send(`Password is incorrect`);
      //   //need to redirect to homepage
      // if (res.locals.user.password === req.body.password) 
      


      
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
      });


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;