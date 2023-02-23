import './App.css';
import LandingPage from './components/Landing';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import Donate from './components/Donate';

function App() {
  return (
    <>
      <div id="donate-root">
        <Donate/>
      </div>
      <div>
        <Navbar/>
        <div className="container"><LandingPage/></div>
        <AboutUs/>
        <Contact id="contact"/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
