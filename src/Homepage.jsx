import './styles.scss';
import React from 'react';
import { Link } from "react-router-dom" 


const Homepage = () => {
    return (
      <div className="App">
        <nav>
          <button className="btn">
            <Link to="/Login">Login</Link>
          </button>
          <button className="btn">
              <Link to="/SignUp">Sign Up</Link>
          </button>
        </nav>
      </div>
    )
}

export default Homepage;
