import { useState } from "react";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <div className="container">
        <h1>Meme Generator</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
