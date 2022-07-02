import React from 'react';
import {Link} from 'react-router-dom';
import Triangle from "../images/bg-triangle.svg";


const Play = (
  {setChoice} 
) => {

  
  const select =(e)=>{         
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
    <img src={Triangle} alt="RPS triangle" className="triangle"></img>  
    <div className="items">
      <Link to ="/game">
        <div data-id="Paper" className="icon icon--paper" onClick={select}>
          
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="Scissors" className="icon icon--scissors" onClick={select}>
          
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="Rock" className="icon icon--rock" onClick={select}>
          
        </div>
      </Link>

    </div>

      
      
    </div>
  )
}
export default Play