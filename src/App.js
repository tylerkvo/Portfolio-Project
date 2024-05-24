import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Home from './Components/Home';
import Project from './Components/Project';
import { useLocation } from 'react-router-dom';

// Initialize React GA with your tracking ID
ReactGA.initialize('G-QX93SHYRWR');

function App() {
  return (
    <Router>
      <TrackPageView />
      <div className="App">
        <div id="page" className="s-pagewrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<Project />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null; // This component does not render anything
}

export default App;
