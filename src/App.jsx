import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NoteApp from "./notes-app/noteApp";
import Nav from "./navbar/nav";
import Game from "./tic-tac-toe/game";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<div>Working on now</div>} />
        <Route path="/notes" element={<NoteApp />} />
        <Route path="/tic-tac-toe" element={<Game/>} />
      </Routes>
    </>
  );
}

export default App;
