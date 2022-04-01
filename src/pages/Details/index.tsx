import { useEffect, useState } from "react";
import StarPng from "../../assets/images/Icon-star-yellow.png";
import HeartPng from "../../assets/images/Icon-heart-gray.png";
import ImageProfileDefault from "../../assets/images/image-profile-default.jpg";
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

type urlParams = {
	movieId: string;
};

const Details = () => {
	const { movieId } = useParams<urlParams>();
	const [movie, setMovie] = useState<any>();
	const [genres, setGenres] = useState<any[]>();
	const [productionCompanies, setProductionCompanies] = useState<any[]>();
	const [mainActors, setMainActors] = useState<any[]>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API}&language=pt-BR`
			)
			.then((response) => {
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
				setMainActors(response.data.cast.slice(0, 3));
			});
	}, [movieId]);

	return (
		<div className="details-container">
			{isLoading ? (
				<div className="loader-area">
					<div className="loader"></div>
				</div>
			) : (
				<>
					<h1 id="title-movie">{movie?.title}</h1>

					<div className="details-movie-container">
						<div id="poster-image">
							{movie?.poster_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
									alt="Poster do filme"
								/>
							) : (
								<></>
							)}
						</div>

						<div className="content-details">
							<div>
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

								<p id="overview">
									{String(movie?.overview).length < 400
										? movie?.overview
										: String(movie?.overview).slice(0, 436)}
								</p>
							</div>

							<div className="actors">
								{isLoading ? (
									<span>l</span>
								) : (
									mainActors?.map((actor) => (
										<div className="actor-container" key={actor.id}>
											<div className="image-actor">
												{actor.profile_path ? (
													<img
														src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
														alt="Imagem ator1"
													/>
												) : (
													<img src={ImageProfileDefault} alt="Imagem ator1" />
												)}
											</div>
											<h5 className="actor-name">{actor.name}</h5>
										</div>
									))
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Details;
