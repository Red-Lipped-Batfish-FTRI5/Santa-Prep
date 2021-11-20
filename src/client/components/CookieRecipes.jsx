import React  from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieRecipes = () => {
   const [search, setSearch] = useState('');
   const [query, setQuery] = useState('');
   const [data, setData] = useState(['Data']);
   

   useEffect(() => {
       const fetchData = () => {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?${query}&number=100&offset=0&type=cookie`, {
	            "method": "GET",
	           "headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "3827341071msh9cabc19f9c4a50ap194b6fjsnb03240d1f478"
	}
})
           .then(response => response.json())
           .then(response => {
            console.log(response.results)
            setData(response.results);
        })
        .then(console.log('Data: ', data))
        .catch(err => {
            console.error(err);
        });
       }
       if (query !== '') {
        fetchData();
      }
    }, [query]);
   

  
  
    return (
    <div>
      <h3>Cookie Recipes</h3>
      <form onSubmit={e => {
          e.preventDefault();
          setQuery(search);
          console.log(search);
          }}>
          <label>Search Cookies:</label>
          <input value={search} onChange={ e => {
              setSearch(e.target.value);
            }}></input>
          <input type="submit" value="Search"></input>
      </form>
      <p>{data[0].title}</p>
      <button type="submit" className="btn btn-primary btn-block">
          <Link to="/Dashboard">Go Back</Link>
      </button>
    </div>
  )
}

export default CookieRecipes

