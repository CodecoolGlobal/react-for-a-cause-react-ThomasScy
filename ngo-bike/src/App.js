import './App.css';
import LandingPage from './components/Landing';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donate from './components/Donate';
import UpButton from './components/UpBtn';

import Projects from './components/Projects';

function App() {
  return (
    <>
      <div id="donate-root">
        <Donate/>
      </div>
      <UpButton/>
      <div>
        <Navbar/>
        <LandingPage/>
        <AboutUs/>
        {/* <Projects/> */}
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
