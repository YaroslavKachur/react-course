import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NoteApp from "./notes-app/noteApp";
import Nav from "./navbar/nav";
import Game from "./tic-tac-toe/game";
import Home from "./home/home"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notes" element={<NoteApp />} />
        <Route path="/tic-tac-toe" element={<Game/>} />
      </Routes>
    </>
  );
}

export default App;
