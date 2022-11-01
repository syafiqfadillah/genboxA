import { BrowserRouter as router, Routes, Route } from 'react-router-dom';

import Home from './Home.js'
import About from './About.js'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Router path="/" element={<Home />}></Router>
        <Router path="/About" element={<About/>}></Router>
      </Routes>
    </Router>
  );
}

export default App;
