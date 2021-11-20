import './styles.scss';
import React from 'react';
import ReactDOM from "react-dom";
import Login from "./client/components/Login.jsx"
import Homepage from "./client/components/Homepage.jsx"
import Wishlist from "./client/components/Wishlist.jsx"
import CookieRecipes from "./client/components/CookieRecipes"
import SignUp from "./client/components/Signup"

const App = () => {
    return (
        <BrowserRouter>
          <Router>
              <Router>
                  <Route exact path="/" element={<SignUp/>}></Route>
                  <Route exact path="/" element={<Login/>}></Route>
                  <Route exact path="/" element={<Homepage/>}></Route>
                  <Route exact path="/" element={<Wishlist/>}></Route>
                  <Route exact path="/" element={<CookieRecipes/>}></Route>
              </Router>
          </Router>
        </BrowserRouter>
    )
}

ReactDOM.render(<Homepage />, document.getElementById('app'));