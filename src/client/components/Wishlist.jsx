import  React from "react";
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const LetterToSanta = () => {
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

    function fakeAlert() {
        alert('Draft Saved!')
      }

    // const firstUpdate = useRef(true);
    // useEffect(()=> {
    //   // Jump out of callback if this is first render
    //   if(firstUpdate.current) {
    //     firstUpdate.current = false;
    //     return;
    //   }
      
    //   Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "santaprep2021@gmail.com",
    //     Password: "Codesmith2021",
    //     To: parentEmail,
    //     From: "santaprep2021@gmail.com",
    //     Subject: "2021 Wishlist",
    //     Body: email,
    //   })
    //     .then(() => {
    //       alert("mail sent successfully")
    //     });
    // }, [message]);


    return (
        <div >
            <form>
                <div className="row">
                    <div className="input-field">
                    <label htmlFor="title" className="to">Santa's Email ➠ </label>
                    <input type="text" className="toSanta" id="title" name="title" value="SantaClause@TheNorthPole.com" readOnly></input>
                    </div>
                    <div className="input-field">
                    <label htmlFor="title" className="to">Parent's Email ➠ </label>
                    <input type="text" className="toSanta" id="title" name="title" onChange ={e=> {setParentEmail(e.target.value)}}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                    <h5>🎅 Write a letter to Santa! 🎁</h5>
                        <textarea name="body" id="body" className="letterTextarea" placeholder="What should Santa bring?" cols="90" rows="25" onChange={e => {setEmail(e.target.value)}}></textarea>
                    </div>
                </div>
                <div className="row">
                    <input type="button" value="Save draft" onClick={fakeAlert} className="submit"></input>
                    <input type="submit" value="Send to Santa Clause" className="submit" onClick={e=> {sendEmail()}}></input>
                    <button type="submit">
                      <Link to="/Dashboard">Draft</Link>
                    </button>
                </div>
            </form>
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

export default LetterToSanta;