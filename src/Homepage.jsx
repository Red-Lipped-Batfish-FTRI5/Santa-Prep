import './styles.scss';
import React from 'react';
import { Link } from "react-router-dom" 
import sleigh from '/src/images/sleigh.png'


const Homepage = () => {
    return (
      <div className="App">
        <nav>
        <Link to="/Login">
          <button className="btn">
            Login
          </button>
          </Link>
          <Link to="/SignUp">
          <button className="btn">
              Sign Up
          </button>
          </Link>
        </nav>
        <div class="main clearfix">
  <div class="santa">
    <div class="cap"></div>
    <div class="face2">
      <div class="eyes">
        <div class="left">
          <span></span>
        </div>
        <div class="right">
          <span></span>
        </div>
      </div>
      <div class="mouth">
        <div class="nose"></div>
      </div>
    </div>
    <div class="body">
      <div class="left-hand"></div>
      <div class="right-hand"></div>
      <div class="belt">
        <div class="buckle"></div>
      </div>
      <div class="legs">
      </div>
    </div>
  </div>
  <div class="gift-holder">
    <div class="gift">
      <div class="ribbon"></div>
    </div>
    <div class="gift purple">
      <div class="ribbon"></div>
    </div>
    <div class="gift orange">
      <div class="ribbon"></div>
    </div>
  </div>
</div>
<p class="text">Merry Christmas</p>
      </div>
    )
}

export default Homepage;
