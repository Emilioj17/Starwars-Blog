import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const tamaño = store.personajesFavoritos;

	return (
		<nav className="navbar navbar-expand-lg">
			<Link className="navbar-brand text-warning mx-5" to="/" style={{ fontSize: "32px" }}>
				Star Wars
			</Link>
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
				<div className="btn-group mx-3">
					<button type="button" className="btn btn-primary">
						Favoritos: {tamaño.length} <span className="text-danger">♥</span>
					</button>
				</div>
			</ul>
		</nav>
	);
};
