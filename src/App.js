import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Particle from './Components/Particle';


function App() {
  
  return (
    
    <div className="App">
      
      <div id="page" class="s-pagewrap">
        <Particle/>
        <Header />
        <Home />
        <About />
        <Experience />
        <Works />
        <Footer />
      </div>
    </div>
  );
}

export default App;
