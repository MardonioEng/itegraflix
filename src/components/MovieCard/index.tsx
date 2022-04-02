import StarPng from "../../assets/images/Icon-star-yellow.png";
import HeartPng from "../../assets/images/Icon-heart-gray.png";
import "./styles.css";

const MovieCard = ({ movie }: any) => {
	return (
		<div className="card-container">
			<div className="image-movie">
				<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Imagem do card" />
			</div>

			<h2 id="title-movie">{movie.title}</h2>

			<div className="details-movie">
				<div className="vote-average-container">
					<div className="star-icon">
						<img src={StarPng} alt="Star Icon" />
					</div>
					<h5 id="vote-average">{movie.vote_average}</h5>
				</div>

				<h5 id="release-date-movie">{movie.release_date.slice(0,4)}</h5>

				<div className="vote-count-container">
					<div className="heart-icon">
						<img src={HeartPng} alt="Heart Icon" />
					</div>
					<h5 id="vote-count">{movie.vote_count}</h5>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
