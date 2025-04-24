import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/UserScreen/Navbar/Navbar";
import ScoreCard from './components/UserScreen/ScoreCard/ScoreCard';
import Matches from './components/UserScreen/Matches/Matches';
import Teams from './components/UserScreen/Teams/Teams';
import Players from './components/UserScreen/Players/Players';
import Dashboard from "./components/AdminPanel/Dashboard";
import './components/UserScreen/Navbar/Navbar.css';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/dashboard'];

  return (
    <div className="app-container">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<ScoreCard />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
