import './App.css';
import LandingPage from './components/Landing';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donate from './components/Donate';
import ScrollButton from './components/scrollBtn';

import Projects from './components/Projects';

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
        <Projects/>
        <Contact id="contact"/>
        <Footer/>
      </div>
      <ScrollButton/>
    </>
  );
}

export default App;
