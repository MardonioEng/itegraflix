import React from "react";
import Wally from "../../assets/images/Wally.png";
import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div id="nav-icon">
				<img src={Wally} alt="Mascote Wally" />
			</div>
			<h1 id="nav-title">itegraflix</h1>
		</nav>
	);
};

export default Navbar;
