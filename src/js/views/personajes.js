import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/personajes.css";

export const Personajes = () => {
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				setPersonajes(data.results);
			})
			.catch(err => console.error(err));
	}, []);

	const Lista = personajes.map((personaje, index) => {
		return (
			<div key={index} className="my-2">
				<div className="card m-0 p-0" style={{ width: "20vw" }}>
					<img className="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-center">{personaje.name}</h5>
						<Link to={"/personaje/" + personaje.uid} className="btn btn-primary float-right">
							Saber más
						</Link>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="container bis" id="grid">
				{Lista}
			</div>
		</>
	);
};
