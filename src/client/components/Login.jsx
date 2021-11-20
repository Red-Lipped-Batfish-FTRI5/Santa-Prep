import React  from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form action="/users/login" method="POST">
      <div className="form-group">
        <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            className="username"
            class="form-control"
            placeholder="Enter Username"
          />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            class="form-control"
            placeholder="Enter Password"
          />
      </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
    </div>  
  )
}

export default Login