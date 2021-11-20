import React  from 'react';

const Signup = () => {
  return (
  <div>
    <form action="/users/signup" method="POST">
    <div class="form-group">
      <label for="name">Name</label>
       <input
          type="name"
          id="name"
          name="name"
          class="form-control"
          placeholder="Enter Name"
        />
    </div>
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
      <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="Enter Email"
        />
    </div>
    <div class="form-group">
       <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="Create Password"
        /> Password must be 6 characters
    </div>
    <div class="form-group">
      <label for="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          class="form-control"
          placeholder="Confirm Password"
        /> Password must match
    </div>
      <button type="submit" class="btn btn-primary btn-block">
        Sign Up
      </button>
      </form>
  </div>
  )
}

export default Signup