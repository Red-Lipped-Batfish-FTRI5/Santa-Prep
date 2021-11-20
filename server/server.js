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

userRouter.post('/', userController.createUser);




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;