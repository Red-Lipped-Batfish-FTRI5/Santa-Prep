import React  from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });


  const onFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      })
    }
    fetch('/SignUp', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.userID) {
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
    <form>
    <div className="form-group">
      <label htmlFor="name">Name</label>
       <input
          type="name"
          id="name"
          onChange={handleInputChange("name")}
          value={values.name}
          name="name"
          className="form-control"
          placeholder="Enter Name"
        />
    </div>
    <div className="form-group">
      <label htmlFor="username">Username</label>
       <input
          type="username"
          id="username"
          onChange={handleInputChange("username")}
          value={values.username}
          name="username"
          className="form-control"
          placeholder="Enter Username"
        />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
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
       <label htmlFor="password">Password</label>
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
    <Link to="/Login">
      <button onClick={onFormSubmit} variant="outlined">
      Sign Up
      </button>
      </Link>   
      </form>
  </div>
  )
}

export default Signup