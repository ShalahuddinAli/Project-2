import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LocationCard from "../components/LocationCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const SearchResult = ({ result, query, isLoading, handleSubmit }) => {
	const useStyles = makeStyles({
		isLoading: {
			margin: 20,
			paddingBottom: 0,
			marginTop: 100,
		},
	});
	const classes = useStyles();

	return (
		<Container>
			<SearchBar handleSubmit={handleSubmit} />
			{isLoading ? (
				<Typography variant="h4" className={classes.isLoading}>
					Searching for "<b>{query}</b>"
				</Typography>
			) : (
				<Typography variant="h4" className={classes.isLoading}>
					Showing results for "<b>{query}</b>"
				</Typography>
			)}
			<Grid container>
				{result.map((element, index) => (
					<Grid item xs={12} md={4} lrg={2}>
						<LocationCard element={element} key={index} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default SearchResult;
