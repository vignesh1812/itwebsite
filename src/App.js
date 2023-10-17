import About from './About';
import './App.css';
import Carousel from './Carousel';
import Contactus from './Contactus';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <About/>
     <Services/>
     <Contactus/>
     <Footer/>
    </div>
  );
}

export default App;
