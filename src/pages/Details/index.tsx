import React from "react";
import ImagePng from "../..//assets/images/homemaranha.jpg";
import StarPng from "../../assets/images/Icon-star-yellow.png";
import HeartPng from "../../assets/images/Icon-heart-gray.png";
import ActorImage from "../../assets/images/tomholland.jpg";
import "./styles.css";

const Details = () => {
	return (
		<div className="details-container">
			<h1 id="title-movie">Homem-Aranha: Sem Volta Para Casa</h1>

			<div className="details-movie-container">
				<div id="poster-image">
					<img src={ImagePng} alt="Poster do filme" />
				</div>

				<div className="content-details">

					<div className="average-count-vote">
						<div className="vote-average-container">
							<div className="star-icon">
								<img src={StarPng} alt="Star Icon" />
							</div>
							<h5 id="vote-average">8.2</h5>
						</div>
						<div className="vote-count-container">
							<div className="heart-icon">
								<img src={HeartPng} alt="Heart Icon" />
							</div>
							<h5 id="vote-count">10625</h5>
						</div>
					</div>

					<p id="genres">Gêneros: Ação, Aventura, Ficção científica</p>

					<p id="production-companies">
						Produtoras: Marvel Studios, Pascal Pictures, Columbia Pictures
					</p>

					<p id="overview">
						Peter Parker é desmascarado e não consegue mais separar sua vida
						normal dos grandes riscos de ser um super-herói. Quando ele pede
						ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos,
						e o forçam a descobrir o que realmente significa ser o Homem-Aranha.
					</p>

					<div className="actors">
						<div className="actor-container">
							<div className="image-actor">
								<img src={ActorImage} alt="Imagem ator1" />
							</div>
							<h5 className="actor-name">Tom Holland</h5>
						</div>
						<div className="actor-container">
							<div className="image-actor">
								<img src={ActorImage} alt="Imagem ator1" />
							</div>
							<h5 className="actor-name">Tom Holland</h5>
						</div>
						<div className="actor-container">
							<div className="image-actor">
								<img src={ActorImage} alt="Imagem ator1" />
							</div>
							<h5 className="actor-name">Tom Holland</h5>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Details;
