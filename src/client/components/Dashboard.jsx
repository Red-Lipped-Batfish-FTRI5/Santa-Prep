import React  from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <button>
        <Link to="/Wishlist">Wishlist</Link>
      </button>
      <button>
        <Link to="/CookieRecipes">Cookie Recipes</Link>
      </button>
    </div>
  )
}

export default Homepage