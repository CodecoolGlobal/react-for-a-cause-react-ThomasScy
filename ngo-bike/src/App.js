import './App.css';
import LandingPage from './components/Landing';
import Navbar from './components/Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container"><LandingPage/></div>
      <AboutUs/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
