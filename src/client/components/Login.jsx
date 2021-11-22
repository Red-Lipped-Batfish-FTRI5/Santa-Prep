import React  from 'react';
import { Link } from "react-router-dom";

const Login = () => {
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
    fetch('/Login', requestOptions)
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
      <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            onChange={handleInputChange("username")}
            value={values.username}
            className="form-control"
            placeholder="Enter Username"
          />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleInputChange("password")}
            value={values.password}
            className="form-control"
            placeholder="Enter Password"
          />
      </div>
      <Link to="/Dashboard">
        <button className="btn btn-primary btn-block" onClick={onFormSubmit}>
            Login
        </button>
        </Link> 
        </form>
    </div>  
  )
}

export default Login