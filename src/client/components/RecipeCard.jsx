import React  from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";


const RecipeCard = (props) => {
  //we need a base URL being provided by the API to view the image source
  //do we need to fetch in-line to render the image?
  const concatURL = `https://spoonacular.com/recipeImages/`+ props.image + ``;
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  

  const sendEmail =  () => {
       Email.send({
          Host: "smtp.gmail.com",
          Username: "santaprep2021@gmail.com",
          Password: "Codesmith2021",
          To: parentEmail,
          From: "santaprep2021@gmail.com",
          Subject: "2021 Wishlist",
          Body: email,
        }).then(
            alert("mail sent successfully")
        ).catch(err);
  }
  return (
      <div className="recipeContainer">
      <div key ={"RecipeCard:" + props.i}>
        <h1 className = "title">{props.title}</h1>
          <img className="recipeImg" src={concatURL}></img>
          <ul className="recipeDetailsList">
            <li>Prep Time: {props.readyInMinutes} minutes</li>
            <li>Serving Size: {props.servings} elves</li>
            <a href={props.sourceUrl}>Link to recipe!</a >
          </ul>
          <div className="row">
                    <input type="submit" value="Send Recipe to Me!" className="submit" onClick={e=> {sendEmail()}}></input>
                </div>
      </div>
      </div>
  )

}



export default RecipeCard;