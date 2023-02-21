export default function Navbar() {
   return (
       <nav className="nav">
            <ul>
            <img className="logo" src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/10527783_10152575617822489_8415598185875700285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tUmE1nTnkagAX81r4XP&_nc_ht=scontent-vie1-1.xx&oh=00_AfCbyXo30jmtT6TOXnJCZOm3n_n9zvQuNqJK-YmPWu4vJw&oe=641B47D0" alt="FABIO LOGO"></img>
            <a href="/" className="site-title"><h1>Fabio</h1></a>
            </ul>

            <ul>
                <CustomLink href="/AboutUs">About Us</CustomLink>
                <CustomLink href="/Contact">Contact Us</CustomLink>
            </ul>
            <button>Donate</button>
            
            {/* <hr></hr> */}

        </nav>
   );
};

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )

}