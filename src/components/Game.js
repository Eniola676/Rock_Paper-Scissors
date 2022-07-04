import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Game = ({score, choice,setScore,setChoice }) => {
  // initialize states..
  const[compChoice,setCompChoice]= useState("");  // state for computers choice
  const[Playerwin,setPlayerwin]= useState(""); // state for player to win 
  const[countdown,setCountdown]= useState("3"); // state for 3 seconds countdown

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

  
  //  result after the game component loads with countdown
  useEffect(() => { 
    const timer=countdown>0 ? setInterval(()=>{
      setCountdown(countdown-1);

    },1000): results();
    return ()=>{
      clearInterval(timer);
    };
  },[compChoice,countdown])

  // const sel =(e)=>{         
  //   console.log(e.target.className);
  // }
 
    return (
      // {/* Display players choice and computers choice and results  */}
    <div className="game">

      <div className="game__player"> {/* for player */}
        <span className="text">You Picked</span>
        {/* <div className="icon" >{choice}</div>   */}
        <div className={`icon icon--${choice} ${Playerwin==="Win"? `icon icon--${choice}--winner`:''}`}  ></div>
      </div>

      

      {/* Displays result and plaay again */}
      {Playerwin==="Draw" &&  <div className="result">
        <span className='text'> Draw</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>}
      {Playerwin==="Win" &&  <div className="result">
        <span className='text'> You Win</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>}
      {Playerwin==="Lost" &&  <div className="result">
        <span className='text'> You Lose</span>
        <Link to ="/" className='play-again' onClick={()=>setCompChoice()}>Play Again</Link>
      </div>} 



      <div className="game__comp"> {/* for computer */}
        <span className="text">The House Picked</span>
        {
          countdown==0? <div className={`icon icon--${compChoice} ${Playerwin==="Lost"? `icon icon--${compChoice}--winner`:''}`  }></div>:<div className="countdown">{countdown}</div>
        }
       
      </div>



    </div>
  )
};

export default Game