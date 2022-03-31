import MovieCard from "components/MovieCard";
import "./styles.css";

const Home = () => {
	return (
		<div className="home-container">
			<h1 id="home-title">Populares</h1>
			<MovieCard />
		</div>
	);
};

export default Home;
