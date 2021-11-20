import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
    return (
        <div class="wishlist">
            <form action="/reviews" method="post">
                <div class="row">
                    <div class="input-field">
                    <label for="title">To:</label>
                    <input type="text" id="title" name="title" value="SantaClause@TheNorthPole.com" readonly></input>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                    <h5>Write your wishlist to Santa here!</h5>
                        <textarea name="body" id="body" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Save draft" class="btn"></input>
                    <Link to="/dashboard" class="btn organe">Cancel</Link>
                </div>
            </form>
            <button type="submit" className="btn btn-primary btn-block">
                <Link to="/Dashboard">Go Back</Link>
            </button>
            <button type="submit" className="btn btn-primary btn-block">
                <Link to="/Dashboard">Drafts</Link>
            </button>
        </div>
    )
}

export default Wishlist