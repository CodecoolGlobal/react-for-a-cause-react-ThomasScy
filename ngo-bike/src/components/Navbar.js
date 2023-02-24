import { Link } from "react-scroll";
import './Navbar.css';
import { useState } from 'react'
import { ReactComponent as Hamburger } from './images/icon_menu-96.svg'
// import { NavLink } from 'react-router-dom'


export default function Navbarcopy() {
    const scrollDurationMs = 2000;

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">

                <div className="logo">
                    <img className="logo" src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/10527783_10152575617822489_8415598185875700285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tUmE1nTnkagAX81r4XP&_nc_ht=scontent-vie1-1.xx&oh=00_AfCbyXo30jmtT6TOXnJCZOm3n_n9zvQuNqJK-YmPWu4vJw&oe=641B47D0" alt="FABIO LOGO"></img>
                    <h1>Fabio</h1>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="landing"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={scrollDurationMs}
                            >Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={scrollDurationMs}
                            >About
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={scrollDurationMs}
                            >Projects
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={scrollDurationMs}
                            >Contact
                            </Link>
                        </li>
                        <li>
                            <button>Donate</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};