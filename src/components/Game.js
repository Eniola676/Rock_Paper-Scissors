import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Game = ({score, choice,setScore,setChoice }) => {


  // initialize states..
  const[compChoice,setCompChoice]= useState("");  // state for computers choice
  const[Playerwin,setPlayerwin]= useState(""); // state for player to win 

  // logic of the computer's choice
  const compChoiceProcess =()=>{
    const choices =["Rock","Paper","Scissors"];
    setCompChoice(choices[Math.floor(Math.random()*3)]); // randomize computers choice
  }

  // selct computer's choice after the game component loads
  useEffect(() => {
    compChoiceProcess();
  },[])

  // Results
  const results=()=>{
    if (choice==="Rock" && compChoice==="Scissors") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="Rock" && compChoice==="Paper") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else if (choice==="Paper" && compChoice==="Scissors") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else if (choice==="Paper" && compChoice==="Rock") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="Scissors" && compChoice==="Paper") {
      setPlayerwin("Win")
      setScore(score=>score+1)
    } else if (choice==="Scissors" && compChoice==="Rock") {
      setPlayerwin("Lost")
      setScore(score=>score-1)
    } else {
      setPlayerwin("Draw")
  
    }    
  }
  // Display result after the game component loads
  useEffect(() => {
    results();
  },[compChoice])
 
    return (

    <div className="game">
      {/* Display players choice and computers choice and results  */}
      player choice : {choice} <br/>   
      computer choice : {compChoice} <br/>  
      results:
      {Playerwin==="Draw" && <h2>Draw</h2>}
      {Playerwin==="Win" && <h2>You Win!</h2>}
      {Playerwin==="Lost" && <h2>You Lose</h2>}
      
      {/*Play agin button  */}
      <Link to ="/" onClick={()=>setCompChoice()}>Play Again</Link>
      
    </div>
  )
};

export default Game