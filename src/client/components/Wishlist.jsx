import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    return (
        <div class="wishlist">
            <form action="/reviews" method="post">
                <div class="row">
                    <div class="input-field">
                    <label for="title" className="to">Santa's Email ➠ </label>
                    <input type="text" className="toSanta" id="title" name="title" value="SantaClause@TheNorthPole.com" readonly></input>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                    <h5>🎅 Write your wishlist to Santa here! 🎁</h5>
                        <textarea name="body" id="body" className="textarea" placeholder="What should Santa bring?" cols="90" rows="25"></textarea>
                    </div>
                </div>
                <div class="row">
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