import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
     return (
          <header>
        <h1 className="main_header">¿Where To Park?</h1>

        <div className="navbar_container">
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
        </div>
      </header>
     )
}

export default Header
