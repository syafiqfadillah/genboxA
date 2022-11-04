import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar.js';
import Navbar from './Components/Navbar.js';
import TopUp from './Components/TopUp.js';
import Jual from './Components/Jual.js';
import Riwayat from './Components/Riwayat.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="Wrapper">
          <Navbar />
          <Routes>
            <Route path="/TopUp" element={<TopUp />} />
            <Route path="/Jual" element={<Jual />} />
            <Route path="/Riwayat" element={<Riwayat />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
