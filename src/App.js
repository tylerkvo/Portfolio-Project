import './App.css';
import './css/base.css'
import './css/main.css'
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Experience />
        <Education />
        <Footer />
        
    </div>
  );
}

export default App;
