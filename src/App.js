import imgs from "./africrooze.jpg";
import "./App.css";
import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contacts/Contact";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import UpButton from "./components/UpBtn";

function App() {
	return (
		<>
			<img width="100" height="50" src={"/pix/bike1.png"} alt="" />
			<img width="100" height="50" src={imgs} alt="" />
			<div id="donate-root">
				<Donate />
			</div>
			<UpButton />
			<div>
				<Navbar />
				<LandingPage />
				<AboutUs />
				{/* <Projects/> */}
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;
