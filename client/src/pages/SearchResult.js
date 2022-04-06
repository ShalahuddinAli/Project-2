import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Loading from '../components/Loading';
import SearchBar from '../components/Search/SearchBar';
import LocationCard from '../components/Search/LocationCard';

const SearchResult = ({ result, query, isLoading, handleSubmit }) => {
	const useStyles = makeStyles({
		isLoading: {
			margin: 20,
			paddingBottom: 0,
			marginTop: 100,
		},
		search: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: 30,
		},
	});
	const classes = useStyles();

	console.log(result, 'dsdadad');

	return (
		<Container>
			<div className={classes.search}>
				<SearchBar handleSubmit={handleSubmit} />
			</div>
			{isLoading ? (
				<Typography variant="h4" className={classes.isLoading}>
					Searching for "{query}"
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
				{result &&
					result.map((element, index) => (
						<Grid item xs={12} md={4} lrg={2} key={index}>
							<LocationCard element={element} />
						</Grid>
					))}
			</Grid>
		</Container>
	);
};

export default SearchResult;
