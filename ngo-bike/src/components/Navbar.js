import { Link } from "react-scroll";
import './Navbar.css';

export default function Navbar() {
    const scrollDurationMs = 2000; 

    return (
    <nav className="nav">
            <div className="site-title">
                
                <Link
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={scrollDurationMs}
                    >
                    <img className="logo" src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/10527783_10152575617822489_8415598185875700285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tUmE1nTnkagAX81r4XP&_nc_ht=scontent-vie1-1.xx&oh=00_AfCbyXo30jmtT6TOXnJCZOm3n_n9zvQuNqJK-YmPWu4vJw&oe=641B47D0" alt="FABIO LOGO"></img>
                    <h1>Fabio</h1>
                </Link>
            </div>

            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={scrollDurationMs}
                    >About Us
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={scrollDurationMs}
                    >Contact
                    </Link>
                </li>
                <li>
                    <button>Donate</button>
                </li>
            </ul>
        </nav>
    );
};