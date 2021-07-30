import SearchBar from '../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import HomeTrafficCam from '../components/HomeTraficCam';
import HomeErp from '../components/HomeErp';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IncidentsTicker from '../components/IncidentsTicker';
import CoeInfo from '../components/CoeInfo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	subbody: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
	},
	mainbody: {
		height: '100vh',
	},
}));

const Home = ({ handleSubmit, handleChange, query }) => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.mainbody}>
				<CoeInfo />
				<IncidentsTicker />
				<Box className="search_home">
					<SearchBar
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						query={query}
					/>
				</Box>
			</Box>
			<Box className={classes.subbody}>
				<HomeTrafficCam className={classes.subbody} />
			</Box>
			<Box>
				<HomeErp className={classes.subbody} />
			</Box>
		</Box>
	);
};

export default Home;
