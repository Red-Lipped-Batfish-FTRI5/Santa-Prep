import React, { useContext, createContext, useState, useEffect}  from 'react';
import {   BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';

const Signup = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false
  });
  // const [name, setName] = useState('');
  // // const [childsName, setChildsName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setLogin] = useState(false);
  const onFormSubmit = () => {
    console.log('hi')
    
  }
  useEffect(() => {

      fetch('/api/SignUp',{       
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": {
          "name": JSON.stringify(values.name),
          "email": JSON.stringify(values.email),
          "password": JSON.stringify(values.password),
        }})
          .then(res => res.json())
          .then(res => 
            {
            console.log("hello");
            // this.state.isLoggedIn = true;
            // res.Redirect('/ParentLanding');
          })
      
    ;})
  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log('am i here')
  };

  return (
  <div>  
  <div className='login'>
    <form>
    <div className="form-group">
      <label htmlFor="name"> Parent's Name:</label>
       <input
          type="name"
          id="name"
          onChange={handleInputChange("name")}
          value={values.name}
          name="name"
          className="form-control"
          placeholder="Enter Parent's Name"
        />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleInputChange("email")}
          value={values.email}
          name="email"
          className="form-control"
          placeholder="Enter Email"
        />
    </div>
    <div className="form-group">
       <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handleInputChange("password")}
          value={values.password}
          name="password"
          className="form-control"
          placeholder="Create Password"
        /> 
    </div>
      <button onClick={onFormSubmit}>
      Sign Up
      </button>
      </form>
  </div>
  <div className="snowmandiv">
    <div className="snowman">
        <div className="body2">
          <div className="head2"></div>
          <div className="hat2"></div>
          <div className="scarf2"></div>
          <div className="buttons2"></div>
          <div className="hands2">
          <div className="right-hand2"></div>
          <div className="left-hand2"></div>
          </div>
        <div className="shadow2"></div>
        </div>
        </div>  
      </div>    
  </div>
  )
}

export default Signup