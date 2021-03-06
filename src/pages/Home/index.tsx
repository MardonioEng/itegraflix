import axios from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
	const [dados, setDados] = useState<any[]>();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}&language=pt-BR&page=1`
			)
			.then((response) => {
				setDados(response.data.results.slice(0, 10));
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="home-container">
			<h1 id="home-title">Populares</h1>
			<div className="row">
				{isLoading ? (
					<div className="loader-area">
						<div className="loader"></div>
					</div>
				) : (
					dados?.map((movie) => (
						<div className="col-sm-6 col-md-4 col-lg-3 movie-card-container" key={movie.id}>
							<Link to={`/itegraflix/moviedetails/${movie.id}`}>
								<MovieCard movie={movie} />
							</Link>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
