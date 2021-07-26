import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<nav>
			<ul>
				<Link to="/" id="home">
					<li>Home</li>
				</Link>
				<Link to="/about" id="about">
					<li>About</li>
				</Link>
				<Link to="/contact" id="contact">
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
