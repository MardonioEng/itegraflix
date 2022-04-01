import React, { useEffect, useState } from "react";
import ImagePng from "../..//assets/images/homemaranha.jpg";
import StarPng from "../../assets/images/Icon-star-yellow.png";
import HeartPng from "../../assets/images/Icon-heart-gray.png";
import "./styles.css";
import axios from "axios";

// type urlParams = {
//   productId: string;
// };

const Details = () => {
	// const { productId } = useParams<urlParams>();
	const [movie, setMovie] = useState<any>();
	const [genres, setGenres] = useState<any[]>();
	const [productionCompanies, setProductionCompanies] = useState<any[]>();
	const [mainActors, setMainActors] = useState<any[]>();
	const [isLoading, setIsLoading] = useState(false);

	const movieId = 634649;

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API}&language=pt-BR`
			)
			.then((response) => {
				// console.log(response.data.genres);
				setMovie(response.data);
				setGenres(response.data.genres);
				setProductionCompanies(response.data.production_companies);
			})
			.finally(() => {
				setIsLoading(false);
			});

		axios
			.get(
				`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API}&language=pt-BR`
			)
			.then((response) => {
				console.log();
				setMainActors(response.data.cast.slice(0, 3));
			});
	}, []);

	return (
		<div className="details-container">
			{isLoading ? (
				<h1>Carregando</h1>
			) : (
				<>
					<h1 id="title-movie">{movie?.title}</h1>

					<div className="details-movie-container">
						<div id="poster-image">
							{/* <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection.
							poster_path}`} alt="Poster do filme" /> */}
							<img src={ImagePng} alt="Poster do filme" />
						</div>

						<div className="content-details">
							<div className="average-count-vote">
								<div className="vote-average-container">
									<div className="star-icon">
										<img src={StarPng} alt="Star Icon" />
									</div>
									<h5 id="vote-average">{movie?.vote_average}</h5>
								</div>
								<div className="vote-count-container">
									<div className="heart-icon">
										<img src={HeartPng} alt="Heart Icon" />
									</div>
									<h5 id="vote-count">{movie?.vote_count}</h5>
								</div>
							</div>

							<p id="genres">
								{`Gêneros: `}
								{genres?.map((genre) => genre.name).join(", ")}
							</p>

							<p id="production-companies">
								{`Produtoras: `}
								{productionCompanies
									?.map((productionCompany) => productionCompany.name)
									.join(", ")}
							</p>

							<p id="overview">{movie?.overview}</p>

							<div className="actors">
								{mainActors?.map((actor) => (
									<div className="actor-container" key={actor.id}>
										<div className="image-actor">
											<img
												src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
												alt="Imagem ator1"
											/>
										</div>
										<h5 className="actor-name">{actor.name}</h5>
									</div>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Details;
