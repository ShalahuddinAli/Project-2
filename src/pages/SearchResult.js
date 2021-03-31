import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LocationCard from "../components/LocationCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const SearchResult = ({ result, query, isLoading, handleSubmit }) => {
	const useStyles = makeStyles({
		isLoading: {
			margin: 20,
			paddingBottom: 0,
			marginTop: 100,
		},
	});
	const classes = useStyles();

	console.log(result);
	return (
		<Container>
			<SearchBar handleSubmit={handleSubmit} />
			{isLoading ? (
				<Typography variant="h4" className={classes.isLoading}>
					Searching for "<b>{query}</b>"
					<Loading />
				</Typography>
			) : (
				<Typography variant="h4" className={classes.isLoading}>
					{result.length === 0
						? `No result found for "${query}"`
						: `Showing results for "${query}"`}
				</Typography>
			)}
			<Grid container>
				{result.map((element, index) => (
					<Grid item xs={12} md={4} lrg={2} key={index}>
						<LocationCard element={element} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default SearchResult;
