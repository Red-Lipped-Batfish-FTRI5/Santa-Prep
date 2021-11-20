import React  from 'react';

const Login = () => {
  return (
    <div>
      <form action="/users/login" method="POST">
      <div class="form-group">
        <label for="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            class="form-control"
            placeholder="Enter Username"
          />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Enter Password"
          />
      </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
    </div>  
  )
}

export default Login