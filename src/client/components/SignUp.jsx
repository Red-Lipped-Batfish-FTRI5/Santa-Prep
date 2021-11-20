import React  from 'react';

const Signup = () => {
  return (
  <div>
    <form action="/users/signup" method="POST">
    <div className="form-group">
      <label htmlFor="name">Name</label>
       <input
          type="name"
          id="name"
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
          name="password"
          className="form-control"
          placeholder="Create Password"
        /> Password must be 6 characters
    </div>
    <div className="form-group">
      <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          className="form-control"
          placeholder="Confirm Password"
        /> Password must match
    </div>
      <button type="submit" className="btn btn-primary btn-block">
      <Link to="/Login"></Link>
        Sign Up
      </button>
      </form>
  </div>
  )
}

export default Signup