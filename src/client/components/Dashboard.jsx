import React  from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="btnwrapper">
      <div>
      <button>
        <Link to="/Wishlist">Wishlist</Link> 
      </button>
      <button>
        <Link to="/CookieRecipes">Cookie Recipes</Link>
      </button>
      </div>
      <div class="wrapper">
        <div class="face">
         <div class="hat-wrapper">
            <div class="hat">
              <div class="hat-top">
            </div>
          </div>
        <div class="hat-brim">
      </div>
    </div>
    <div class="eyes">
      <div class="eye left-eye">
      </div>
      <div class="eye right-eye">
      </div>
          </div>
          <div class="mouth">
           </div>
            <div class="beard">
                <div class="mustache">
                <div class="mustache-left">
                </div>
              <div class="mustache-right">
             </div>
           </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Homepage