import  React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    
    return (
        <div className="wishlist">
            <form action="/reviews" method="post">
                <div className="row">
                    <div className="input-field">
                    <label htmlFor="title" className="to">Santa's Email ➠ </label>
                    <input type="text" className="toSanta" id="title" name="title" value="SantaClause@TheNorthPole.com" readOnly></input>
                    </div>
                    <div className="input-field">
                    <label htmlFor="title" className="to">Parent's Email ➠ </label>
                    <input type="text" className="toSanta" id="title" name="title" ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                    <h5>🎅 Write your wishlist to Santa here! 🎁</h5>
                        <textarea name="body" id="body" className="textarea" placeholder="What should Santa bring?" cols="90" rows="25"></textarea>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Save draft" className="submit"></input>
                    <input type="submit" value="Send to Santa Clause" className="submit"></input>
                    <button type="submit">
                <Link to="/Dashboard">Draft</Link>
            </button>
                </div>
            </form>
            <div className="btn btnbottom">
            <button type="submit">
                <Link to="/Dashboard">Go Back</Link>
            </button>
            </div>
        </div>
    )
}

export default Wishlist