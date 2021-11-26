import React, {useState, useEffect} from 'react'; //useEffect allows you to change state
import { Link } from 'react-router-dom';
//import { render } from 'sass';

//create a submit function 
//add 3 components and put them in parent component

const KidsDashboard = () => {

  const [col1, setOne] = useState([]);
  const [col2, setTwo] = useState([]);
  const [col3, setThree] = useState([]);


  const onSubmit1 = (e) => {
    e.preventDefault() //this method doesnt allow the page to refresh
    const wish = e.target.wish.value //current text
    const curr = [...col1] //copying existing state 
    if(curr.length<5){
      curr.push(wish) //push the value from e.target.wish.value
      setOne(col1 => curr) //updating the state 
    }
  }
  const onSubmit2 = (e) => {
    e.preventDefault() //this method doesnt allow the page to refresh
    const wish = e.target.wish.value //current text

    const curr = [...col2] //copying existing state 
    if(curr.length<5){
      curr.push(wish) //push the value from e.target.wish.value
      setTwo(col2 => curr) //updating the state 
    }
  }
  const onSubmit3 = (e) => {
    e.preventDefault() //this method doesnt allow the page to refresh
    const wish = e.target.wish.value //current text
    const curr = [...col3] //copying existing state 
    if(curr.length<5){
      curr.push(wish) //push the value from e.target.wish.value
      setThree(col3 => curr) //updating the state 
    }
  }
   return (
     
  <div className="some-page-wrapper">
    
    {/*<h3>What's on your wish List This Christmas </h3>*/}
    <div className="row">

      <div className="column">
        <h3> Your top choice </h3>
        <div className="mostWantedColumn">
          {/* <textarea className="wishListTextarea" cols='10' rows="10" onSubmit= {e => onSubmit(e)}></textarea> */}
          <form onSubmit= {e => onSubmit1(e)}>
          <input type="text" name="wish" className="wishListTextarea" cols='10' rows="10"  />
          </form>
          
          <ul>
            {
              col1.map((el, idx) => {
                return <li key ={idx}>{el}</li>
              })
            }
          </ul>
        </div>
      </div>

      <div className="column">
      <h3> Your second  choice </h3>
        <div className="medicoreColumn">
        <form onSubmit= {e => onSubmit2(e)}>
          <input type="text" name="wish" className="wishListTextarea" cols='10' rows="10"  />
          </form>
          
          <ul>
            {
              col2.map((el, idx) => {
                return <li key ={idx}>{el}</li>
              })
            }
          </ul>
        </div>
      </div>

      <div className="column">
      <h3> Your third choice </h3>
        <div className="leastWantedColumn">
        <form onSubmit= {e => onSubmit3(e)}>
          <input type="text" name="wish" className="wishListTextarea" cols='10' rows="10"  />
          </form>
          
          <ul>
            {
              col3.map((el, idx) => {
                return <li key ={idx}>{el}</li>
              })
            }
          </ul>
        </div>
      </div>
      
    </div>
  </div>
) 
}
export default KidsDashboard;

