import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";

export const Planetas = () => {
	const [personajes, setPersonajes] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// //Get Data
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => {
				// console.log(data.results);
				setPersonajes(data.results);
			})
			.catch(err => (console.error(err), console.log("Error en useEffect")));
	}, []);

	const handler = name => {
		store.personajesFavoritos.includes(name) ? actions.deleteFavoritos(name) : actions.saveFavoritos(name);
		console.log(store.personajesFavoritos);
	};

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

	const Lista = personajes.map((personaje, index) => {
		return (
			<div key={index} className="my-2">
				<div className="card m-0 p-0" style={{ width: "20vw" }}>
					<img className="card-img-top" src={listaImagenes[index]} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-center">{personaje.name}</h5>
						<Link to={"/planetas/" + personaje.uid} className="btn btn-primary float-left my-3">
							Saber más
						</Link>
						<Link
							to="#"
							onClick={name => handler(personaje.name)}
							className={`float-right display-4 p-0 m-0 ${
								store.personajesFavoritos.includes(personaje.name) ? "text-warning" : ""
							}`}>
							♥
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
