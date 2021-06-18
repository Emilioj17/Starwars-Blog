import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "../../styles/personaje.css";

let listaImagenes = [
	"https://lh3.googleusercontent.com/proxy/BYAEXaVrGnOu6n4zfwdH1hAbkFaumREDPRhHpwqGTovfJL-ECxtgk-qZI7I-w2MgVRwc6Ex9ObO715iOWt_bxHMCRQt-WMD3_rJhfF-fOMTOpkKpyJg50hrdXYp-QspbPCDnVfCyRweTaxbvJi-rX2Jc1UUByK8WvLoHkUQ02uF9PuccNu0AUph7HnXSeh8-KvEir9jGoAhCWtrGZ6ZHHls95XKXROIf87ms",
	"https://i.etsystatic.com/19757570/r/il/0387f4/1874814395/il_570xN.1874814395_hvm7.jpg",
	"https://assets.dragoart.com/images/201_501/how-to-draw-r2-d2_5e4c70a8950427.55953193_1176_3_3.jpg",
	"https://htdraw.com/wp-content/uploads/2020/04/How-to-draw-Darth-Vader-from-the-movie-Star-Wars.jpg",
	"https://i.pinimg.com/originals/d1/50/f4/d150f4de6c56afe2ce8a1d6864bab934.png",
	"https://comicvine.gamespot.com/a/uploads/original/6/62795/5012547-star%20wars.jpg",
	"http://pm1.narvii.com/6667/003c1aab2a6fe31c1cac2b0959c35ef9e66681b4_00.jpg",
	"https://i.etsystatic.com/17731789/r/il/19119f/2194975339/il_570xN.2194975339_b2z5.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9386c70-28a3-4102-af0e-4f93cee4d143/d7a58fw-dd9335a8-bf14-441e-a1ab-fd8ef48b6e2b.jpg/v1/fill/w_900,h_611,q_75,strp/biggs_darklighter_by_lucasmarangon_d7a58fw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5Mzg2YzcwLTI4YTMtNDEwMi1hZjBlLTRmOTNjZWU0ZDE0M1wvZDdhNThmdy1kZDkzMzVhOC1iZjE0LTQ0MWUtYTFhYi1mZDhlZjQ4YjZlMmIuanBnIiwiaGVpZ2h0IjoiPD02MTEiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2M5Mzg2YzcwLTI4YTMtNDEwMi1hZjBlLTRmOTNjZWU0ZDE0M1wvbHVjYXNtYXJhbmdvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.IAbXQhYz83srf9JYPrHOewKTIkwY_8dTJsx1BkKLvTA",
	"https://pbs.twimg.com/media/DYp22-JXUAEHPKX.jpg"
];

export const Planeta = (/*{ history, location, match, ...props }*/ props) => {
	const [personajes, setPersonajes] = useState({
		nombre: "",
		diametro: "",
		poblacion: "",
		terreno: "",
		descripcion: "",
		clima: ""
	});
	// const { new_id } = match.params;
	const new_id = useParams();

	console.log("Holaxx");
	console.log(new_id.new_id);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/planets/" + new_id.new_id) //`https://www.swapi.tech/api/people/${new_id}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// setPersonajes({
				// 	nombre: data.result.properties.name,
				// 	diametro: data.result.properties.diameter,
				// 	poblacion: data.result.properties.population,
				// 	terreno: data.result.properties.terrain,
				// 	descripcion: data.result.description,
				// 	clima: data.result.properties.climate
				// });
			})
			.catch(err => (console.error(err), console.log("Error en useEffect")));
	}, []);

	return (
		<div className="centralsz container">
			<div className="izquierda">{personajes.nombre}</div>
			<div className="derecha card my-3 mx-0 px-0 py-2">
				<img
					className="card-img-top rounded mx-auto d-block"
					src={listaImagenes[new_id.new_id - 1]}
					alt="Card image cap"
					style={{ width: "600px" }}
				/>
				<div className="card-body container">
					<p className="card-text">
						{" "}
						Descripción: {personajes.descripcion}. Peso: {personajes.peso} Kg. Altura: {personajes.altura}{" "}
						cm. Año de Nacimiento: {personajes.anonacimiento}.
					</p>
					<p className="card-text">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat fugit laudantium beatae
						magni temporibus unde laboriosam tempore, quasi hic harum voluptatem, quae in quod, est nulla
						dolorum et sapiente.
					</p>
				</div>
			</div>
		</div>
	);
};
