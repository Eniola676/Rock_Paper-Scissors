
import React, { useState } from "react";
import Info from "./components/Info";
import Play from "./components/Play";
import Game from "./components/Game";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";

const App = () => {

  const[choice,setChoice]= useState("");
  const[score,setScore]= useState(0);
  

  return (
    <><div className="container">
      <Info score={score}/>
      <Routes>
        <Route path="/" element={<Play setChoice={setChoice}/>} />
        <Route path="game" element={<Game score={score} choice={choice}  setScore={setScore}/>} />
        <Route path="modal" element={<Modal />} />
      </Routes>
     
    </div>
    <Footer />
    </>
  )
}

export default App
