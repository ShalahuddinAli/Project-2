import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import HomeCardArr from "../HomeArticle";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const Home = ({ handleSubmit }) => {
	const history = useHistory();

	return (
		<div className="home">
			<div className="search_home">
				<SearchBar handleSubmit={handleSubmit} />
			</div>

			<article>
				<Container>
					<Grid container direction="row" justify="space-around">
						{HomeCardArr.map((element, index) => (
							<Grid item xs={12} md={6} key={index}>
								<HomeCard element={element} key={index} />
							</Grid>
						))}
					</Grid>
				</Container>
			</article>
		</div>
	);
};

export default Home;
