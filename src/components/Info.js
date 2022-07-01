import React from 'react'

const Info = ({score}) => {


  return (
    <div className="info">
      <div className="title">  
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>    
      </div>
      <div className="Scorebox">
        <span>Score</span>
        <div className="Scorebox__score">
          {score}
        </div>

        

      </div>


      {/* <h1>Score:{score}</h1> */}
    
    </div>
  )
}

export default Info