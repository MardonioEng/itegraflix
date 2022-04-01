import MovieCard from "components/MovieCard";
import "./styles.css";

const Home = () => {
	return (
		<div className="home-container">
			<h1 id="home-title">Populares</h1>
			<div className="row">
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<MovieCard />
				</div>
			</div>
		</div>
	);
};

export default Home;
