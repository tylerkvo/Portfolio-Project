import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Particle from './Components/Particle';
import Project from './Components/Project';
import { HashRouter as Router, Route, Routes,} from "react-router-dom";


function App() {
  
  return (
    <Router>
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

export default App;
