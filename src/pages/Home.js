import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import HomeCardArr from "../HomeArticle";
import Container from "@material-ui/core/Container";

const Home = ({ handleSubmit }) => {
	return (
		<div className="home">
			<SearchBar handleSubmit={handleSubmit} home />

			<article>
				<Container>
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="center"
					>
						{HomeCardArr.map((element, index) => (
							<Grid item xs={12} md={6} key={index}>
								<HomeCard element={element} />
							</Grid>
						))}
					</Grid>
				</Container>
			</article>
		</div>
	);
};

export default Home;
