import './App.css';
import LandingPage from './Landing';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
