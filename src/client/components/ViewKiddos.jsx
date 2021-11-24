import React  from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import KidCard from './KidCard.jsx'
// import ShoppingCard from './ShoppingCard.jsx'
//map each kid to a selector
//render as cards conditionally
//fetch data for each list on youtube modal (5)
//fetch data for each list on shopping modal (5)

const ViewKiddos = () => { 
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://serpapi.com/search.json?q=${searchQuery}+toy+buy&location=Austin%2C+Texas%2C+United+States&hl=en&gl=us&api_key=c80c62120983208a5a79dbe3a49528bad80e22e41fb41db090eccb5bfc6f423e`, {
      "method": "GET"
      })
        .then(response => response.json())
        .then(response => {
        console.log('Response:', response.results)
        setData(response.results);
      })
        .then(console.log('Data: ', data))
        .catch(err => {
          throw Error(err.message);
        })    }

  if (query !== ''|| query !== 'undefined') {
    console.log(query)
    fetchData()
  }}, [searchQuery])

  const firstUpdate = useRef(true);

  useEffect(() => {
    // Jump out of callback if this is first render
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('useEffectData', data)
    const cardHolder = [];
  //  console.log('DataLength', data.length;
  for (let i = 0; i < 10; i++) {
    cardHolder.push(
      <div>
         <ShoppingCard
  //       title = {data[i].title}
  //       readyInMinutes = {data[i].readyInMinutes}
  //       image = {data[i].image}
  //       servings = {data[i].servings}
  //       sourceUrl = {data[i].sourceUrl}
        />
      </div>

    )
  }     
  console.log("Cardholder", cardHolder)
  setCards(cardHolder);

  }, [data])
/*
  async componentDidMount () {
    const data = await fetch('/api/parentRoutes')
    fetch child names, map to selector for "Choose Kiddos"
  }
 */ 
/* On click handler for choose kiddos, populate tables
*/
/* On Click handler for choose table, render youtube window
*/
  return (
    <div className="kiddoContainer">
    
    <div className =""><h3 className= "SantaStyle2">Choose Kiddo</h3></div>
    <select>
    {}
    </select>
    <div className="wishListPV">
      {/* use Zoew's columns */}
    </div>
    <div className ="parentShop"><h3 className= "SantaStyle2">Put on Your Santa Hat</h3></div>
    {/*search for toy reviews using youtube API?*/}
    {/*search for toy prices using shopping API?*/}
     <div className="btn btnbottom">
     <Link to="/ParentLanding">
    <button type="submit" >
        Go Back
    </button>
    </Link>
    </div>
  </div>
  )
};

export default ViewKiddos;
