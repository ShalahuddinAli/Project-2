import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import HomeErp from '../components/Home/HomeErp';
import CoeInfo from '../components/Home/CoeInfo';
import SearchBar from '../components/Search/SearchBar';
import HomeTrafficCam from '../components/Home/HomeTraficCam';
import IncidentsTicker from '../components/Home/IncidentsTicker';

import img from '../img/pexels-photo-385997.jpeg';

const useStyles = makeStyles((theme) => ({
	mainbody: {
		height: '85vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 60,
	},
	subbody: {
		height: '100vh',
		display: 'flex',
	},
	ticker: {
		width: '100%',
	},
	searchHome: {
		border: '2px solid black',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '50vh',
		width: '80vw',
		backgroundImage: `url(${img})`,
		backgroundPosition: 'center',
	},
}));

const Home = ({ handleSubmit, handleChange, query }) => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<IncidentsTicker />
			<Grid container className={classes.mainbody}>
				<CoeInfo />

				<Grid item container className={classes.searchHome}>
					<SearchBar
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						query={query}
					/>
				</Grid>
			</Grid>
			<Grid container className={classes.subbody}>
				<HomeTrafficCam className={classes.subbody} />
			</Grid>
			<Grid container>
				<HomeErp className={classes.subbody} />
			</Grid>
		</Box>
	);
};

export default Home;
