import React  from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import KidCard from './KidCard.jsx'
//map each kid to a selector
//render as cards conditionally

const ViewKiddos = () => { 
  return (
    <div className="Container">
    <select>
    <h3 className="SantaStyle1">View Your Kiddos</h3>
    {}
    </select>
    <div className="wishListPV">
      {cards}
    </div>
     <div className="btn btnbottom">
     <Link to="/ParentLanding">
    <button type="submit" >
        Go Back
    </button>
    </Link>
    </div>
  </div>
  )
};

export default ViewKiddos;
