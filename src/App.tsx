import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Gazeval from "./routes/gazeval";
import Home from "./routes/home";

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

export default function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gazeval" element={<Gazeval />} />
        {/* you can add 404 route etc */}
      </Routes>
    </div>
  );
}
