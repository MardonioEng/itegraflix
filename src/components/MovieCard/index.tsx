import React from "react";
import ImagePng from "../../assets/images/homemaranha.jpg";
import StarPng from "../../assets/images/Icon-star-yellow.png";
import HeartPng from "../../assets/images/Icon-heart-gray.png";
import "./styles.css";

const MovieCard = () => {
	return (
		<div className="card-container">

			<div className="image-movie">
				<img src={ImagePng} alt="Imagem do card" />
			</div>

			<h2 id="title-movie">Homem-Aranha: Sem Volta Para Casa</h2>

			<div className="details-movie">

				<div className="vote-average-container">
					<div className="star-icon">
						<img src={StarPng} alt="Star Icon" />
					</div>
					<h5 id="vote-average">8.2</h5>
				</div>

				<h5 id="release-date-movie">2022</h5>

				<div className="vote-count-container">
					<div className="heart-icon">
						<img src={HeartPng} alt="Heart Icon" />
					</div>
					<h5 id="vote-count">10625</h5>
				</div>

			</div>

		</div>
	);
};

export default MovieCard;
