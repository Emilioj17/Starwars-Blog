import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export const Personaje = (/*{ history, location, match, ...props }*/ props) => {
	const [personajes, setPersonajes] = useState({
		nombre: "",
		anonacimiento: "",
		altura: "",
		peso: "",
		descripcion: "",
		genero: ""
	});
	// const { new_id } = match.params;
	const new_id = useParams();

	console.log("Holaxx");
	console.log(new_id.new_id);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/people/" + new_id.new_id) //`https://www.swapi.tech/api/people/${new_id}`)
			.then(res => res.json())
			.then(data => {
				setPersonajes({
					nombre: data.result.properties.name,
					anonacimiento: data.result.properties.birth_year,
					altura: data.result.properties.height,
					peso: data.result.properties.mass,
					descripcion: data.result.description,
					genero: data.result.properties.gender
				});
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<>
			<div className="card my-3 py-4">
				<img
					className="card-img-top rounded mx-auto d-block"
					src="https://picsum.photos/id/1062/300/300"
					alt="Card image cap"
					style={{ width: "18rem" }}
				/>
				<div className="card-body container">
					<h5 className="card-title text-center">{personajes.nombre}</h5>
					<p className="card-text"> Descripción: {personajes.descripcion} </p>
					<p className="card-text"> Genero: {personajes.genero} </p>
					<p className="card-text"> Peso: {personajes.peso} Kg.</p>
					<p className="card-text"> Altura: {personajes.altura} cm.</p>
					<p className="card-text"> Año de Nacimiento: {personajes.anonacimiento} </p>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
				</div>
			</div>
		</>
	);
};
