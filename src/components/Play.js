import React from 'react';
import {Link} from 'react-router-dom';


const Play = (
  {setChoice} 
) => {

  
  const select =(e)=>{         
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">

      <Link to ="/game">
        <div data-id="Rock" className="icon icon--rock" onClick={select}>
          Rock
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="Paper" className="icon icon--paper" onClick={select}>
          Paper
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="Scissors" className="icon icon--scissors" onClick={select}>
          Scissors
        </div>
      </Link>
      
      
    </div>
  )
}
export default Play