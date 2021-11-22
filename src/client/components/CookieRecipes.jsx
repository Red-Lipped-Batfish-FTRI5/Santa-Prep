import React  from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieRecipes = () => {
   const [search, setSearch] = useState('');
   const [query, setQuery] = useState('');
   const [data, setData] = useState(['']);
   

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
            console.log(response.results)
            document.getElementById('image').src = response.results;
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
      {data.map(item => (
        <ul className="cookieRecipe">
            <h2 key={item.title}>Recipe {item.title}</h2>
            <p key={item.readyInMinutes}>Ready in {item.readyInMinutes} minutes</p>
            <img key={item.image} id="image" src={item.image} />
            <a key={item.sourceUrl} Find the recipe at href={item.sourceUrl}>Link to recipe!</a >
        </ul>
      ))}
      </nav>
       <div className="btn btnbottom">
      <button type="submit">
          <Link to="/Dashboard">Go Back</Link>
      </button>
      </div>
    </div>
  )
}

export default CookieRecipes

