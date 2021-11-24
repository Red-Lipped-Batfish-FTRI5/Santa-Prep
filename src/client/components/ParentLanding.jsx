import React  from 'react';
import { Link } from 'react-router-dom';

const ParentLanding = () => {
  return (
    <div>
      <h2>Now that the kids are in bed...</h2>
    <div className="btnwrapper">
      <div>
      <Link to="/ViewKiddos">
      <button>
        Kiddos: Good, Bad, In Between?
      </button>
      </Link> 
      {/* Can we have a bit more descriptive instruction here?*/}
      <Link to="/CookieRecipes">
      <button>
        What Will Santa Eat?
      </button>
      </Link>
      </div>
      <div className="wrapper">
        <div className="face">
         <div className="hat-wrapper">
            <div className="hat">
              <div className="hat-top">
            </div>
          </div>
        <div className="hat-brim">
      </div>
    </div>
    <div className="eyes">
      <div className="eye left-eye">
      </div>
      <div className="eye right-eye">
      </div>
          </div>
          <div className="mouth">
           </div>
            <div className="beard">
                <div className="mustache">
                <div className="mustache-left">
                </div>
              <div className="mustache-right">
             </div>
           </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ParentLanding;