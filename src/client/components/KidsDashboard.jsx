import React  from 'react';
import { Link } from 'react-router-dom';
//import { render } from 'sass';

//create a submit function 
//add 3 components and put them in parent component

const KidsDashboard = () => {
   return (
    <div className="some-page-wrapper">
    <div className="row">
      <div className="column">
        <div className="mostWantedColumn">
          <textarea cols='10' rows="10"></textarea>
        </div>
      </div>
      <div className="column">
        <div className="medicoreColumn">
        <textarea name="column" id="column" className="wishListTextarea" cols='10' rows="10"></textarea>
        </div>
      </div>
          <div className="column">
        <div className="leastWanted">
        <textarea cols='10' rows="10"></textarea>
        </div>
      </div>
    </div>
  </div>
) 
}
export default KidsDashboard;

