import React  from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard.jsx'

const CookieRecipes = () => {
   const [search, setSearch] = useState('');
   const [query, setQuery] = useState('');
   const [data, setData] = useState(['']);
   const [cards, setCards] = useState([]);

   useEffect(() => {
       const fetchData = () => {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}&number=10&offset=0&type=cookie`, {
	            "method": "GET",
	           "headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "3827341071msh9cabc19f9c4a50ap194b6fjsnb03240d1f478"
	}
})
           .then(response => response.json())
           .then(response => {
            console.log('Response:', response.results)
            setData(response.results);
        })
        .then(console.log('Data: ', data))
        .catch(err => {
            console.error(err);
        });
       }
       if (query !== '') {
        console.log(query)
        
        fetchData();
      }
    }, [query]);
   
    const firstUpdate = useRef(true);
    useEffect(() => {
      // Jump out of callback if this is first render
      if(firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      console.log('useEffectData', data)
      const cardHolder = [];
     console.log('DataLength', data.length);
    for (let i = 0; i < data.length; i++) {
      cardHolder.push(
        <div>
          <RecipeCard
          i = {i}
          title = {data[i].title}
          readyInMinutes = {data[i].readyInMinutes}
          image = {data[i].image}
          servings = {data[i].servings}
          sourceUrl = {data[i].sourceUrl}
          />
        </div>

      )
    }     
    console.log("Cardholder", cardHolder)
    setCards(cardHolder);

    }, [data])

  
    return (
    <div className="Container">
      <nav>
      <h3 className="SantaStyle1">Cookie Recipes</h3>
      <form onSubmit={e => {
          e.preventDefault();
          const cleanedSearch = search.replace(/' '/g, '%20');
          setQuery(cleanedSearch);
          }}>
          <label className="SantaStyle2">Search Cookies:</label>
          <input value={search} onChange={ e => {
              setSearch(e.target.value);
            }}></input>
          <input type="submit" value="Search"></input>
      </form>
      </nav>
      <div className="cardContainer">
        {cards}
      </div>
       <div className="btn btnbottom">
       <Link to="/Dashboard">
      <button type="submit">
          Go Back
      </button>
      </Link>
      </div>
    </div>
  )
}

export default CookieRecipes

