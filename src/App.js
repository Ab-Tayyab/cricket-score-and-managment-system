import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScoreCard from './components/ScoreCard/ScoreCard'
import Matches from './components/Matches/Matches'
import Teams from './components/Teams/Teams'
import Players from './components/Players/Players'
import './components/Navbar/Navbar.css'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<ScoreCard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
