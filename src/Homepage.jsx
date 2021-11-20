import './styles.scss';
import React from 'react';
import { Link } from "react-router-dom" 


const Homepage = () => {
    return (
      <div className="App">
        <nav>
          <button>
            <Link to="/Login">Login</Link>
          </button>
          <button>
              <Link to="/SignUp">Sign Up</Link>
          </button>
        </nav>
      </div>
    )
}

export default Homepage;
