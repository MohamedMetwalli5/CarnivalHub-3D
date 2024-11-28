import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home.jsx'
import BallAndBottleToss from './pages/BallAndBottleToss.jsx'
import TargetShooting from './pages/TargetShooting.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ball-and-bottle-toss" element={<BallAndBottleToss />} />
        <Route path="/target-shooting" element={<TargetShooting />} />
      </Routes>
    </Router>
  </StrictMode>,
)
