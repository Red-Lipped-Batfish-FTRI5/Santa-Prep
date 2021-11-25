import React  from 'react';



const RecipeCard = (props) => {
  
  return (
      <div className="recipeContainer">
      <div key ={"RecipeCard:" + props.i}>
        <h1 className = "title">{props.title}</h1>
          <img src={props.image}></img>
          <ul className="recipeDetailsList">
            <li>Prep Time: {props.readyInMinutes}</li>
            <li>Serving Size: {props.servings}</li>
            <a href={props.sourceUrl}>Link to recipe!</a >
          </ul>

      </div>
      </div>
  )
  
}




export default RecipeCard;