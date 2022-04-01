import React from "react";
import { Link } from "react-router-dom";
import Wally from "../../assets/images/Wally.png";
import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div id="nav-icon">
				<img src={Wally} alt="Mascote Wally" />
			</div>
			<Link to={`/`}>
				<h1 id="nav-title">itegraflix</h1>
			</Link>
		</nav>
	);
};

export default Navbar;
