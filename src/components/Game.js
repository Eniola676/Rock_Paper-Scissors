import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Game = ({score, choice,setScore,setChoice }) => {


  // initialize states..
  const[compChoice,setCompChoice]= useState("");  // state for computers choice
  const[Playerwin,setPlayerwin]= useState(""); // state for player to win 

  // logic of the computer's choice
  const compChoiceProcess =()=>{
    const choices =["rock","paper","scissors"];
    setCompChoice(choices[Math.floor(Math.random()*3)]); // randomize computers choice
  }

  // selct computer's choice after the game component loads
  useEffect(() => {
    compChoiceProcess();
  },[])

  // Results
  const results=()=>{
    if (choice==="rock" && compChoice==="scissors") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="rock" && compChoice==="paper") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else if (choice==="paper" && compChoice==="scissors") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else if (choice==="paper" && compChoice==="rock") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="scissors" && compChoice==="paper") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="scissors" && compChoice==="rock") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else {
      setPlayerwin("Draw")
  
    }    
  }
  //  result after the game component loads
  useEffect(() => {
    results();
  },[compChoice])

  const sel =(e)=>{         
    console.log(e.target.className);
    
  }
 
    return (

      // {/* Display players choice and computers choice and results  */}
    <div className="game">

      <div className="game__player"> {/* for player */}
        <span className="text">You Picked</span>
        {/* <div className="icon" >{choice}</div>   */}
        <div className={`icon icon--${choice}`}  onClick={sel}>f</div>
      </div>

      

      {/* Displays result and plaay again */}
      {Playerwin==="Draw" &&  <div className="result__play">
        <span className='text'> Draw</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>}
      {Playerwin==="Win" &&  <div className="result__play">
        <span className='text'> You Win</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>}
      {Playerwin==="Lost" &&  <div className="result__play">
        <span className='text'> You Lose</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>} 


      <div className="game__comp"> {/* for computer */}
        <span className="text">Computer Picked</span>
        <div className={`icon icon--${compChoice}`  }>{compChoice}</div>
      </div>


      
    </div>
  )
};

export default Game