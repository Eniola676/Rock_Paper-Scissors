import React, { useState } from 'react'
import Modal from "./Modal"
// import { Link } from 'react-router-dom';


const Footer = () => {

  const[modal,setModal]=useState(false);

  const toggle=()=>{
    setModal(!modal);
    console.log(modal)
  };

 

  return (
    <>
    <footer className="footer">
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/oluwatobi-ojetoyinbo-b236b1162/"  target="_blank">Oluwatobi Ojetoyinbo</a>.
      </div>
      <button className="rules" onClick={toggle}>Rules</button>
      {/* <Link to ="/modal" ><button className="rules" onClick={toggle}>Rules</button></Link> */}
     
    </footer>
    {
      modal? <Modal toggle={toggle}/> : null
    }
    
    </>
  );
};

export default Footer