import React  from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const ParentAuth = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });
  const onFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      })
    }
    fetch('/ParentAuth', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (newUser.id) {
          props.authenicator({authorized: true})
        }
        console.log('Res: ', res)
      });
  }
  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div>
      <div>
        <h3>No kiddo zone!</h3>
        <h4>Fuddy Duddies only. Parents, reenter your password to continue.</h4>
      </div>
    <div className= 'parentAuth'>
      <form>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={handleInputChange("email")}
            value={values.email}
            className="form-control"
            placeholder="Enter Parent's Email"
          />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleInputChange("password")}
            value={values.password}
            className="form-control"
            placeholder="Enter Password"
          />
      </div>
      <Link to="/ParentLanding">
        <button className="btn btn-primary btn-block" onClick={onFormSubmit}>
            Login
        </button>
        </Link> 
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

export default ParentAuth;