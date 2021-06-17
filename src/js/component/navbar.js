import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<Link className="navbar-brand text-warning" to="/">
				Star Wars
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/Home">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/personajes">
							Personajes
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/planetas">
							Planetas
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/demo">
							Check the Context in action
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
