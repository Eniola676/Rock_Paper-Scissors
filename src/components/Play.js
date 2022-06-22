import React from 'react';
import Link from 'react-router-dom';
import Game from './Game';

const Play = (
  setChoice
) => {

  
  const select =()=>{         
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
      <Link to ="/game">
        <div data-id="paper" className="icon icon--rock" onClick={select}>
          Rock
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="paper" className="icon icon--paper" onClick={select}>
          Paper
        </div>
      </Link>
      <Link to ="/game">
        <div data-id="paper" className="icon icon--scissors" onClick={select}>
          Scissors
        </div>
      </Link>
      
    </div>
  )
}
export default Play