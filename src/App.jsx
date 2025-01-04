import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ekt2qb from './pages/ekt2qb';
import Discorders from './pages/discorders1';
import HomePage from './pages/index';
import Patterns from './pages/patterns.jsx';
import Podcasts from './pages/podcasts';
import VideoSection from "./pages/videos.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discorders" element={<Discorders />} />
        <Route path="/ekt2ab" element={<Ekt2qb />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/videos" element={<VideoSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;