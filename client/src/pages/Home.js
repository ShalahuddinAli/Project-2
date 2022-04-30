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
		<div className="h-full w-full flex flex-col items-center">
			<IncidentsTicker />

			<CoeInfo />

			<div
				className="h-[32rem] w-10/12 flex justify-center items-center my-4 border border-black "
				style={{
					backgroundImage: `url(${img})`,
					backgroundPosition: 'center',
				}}>
				<SearchBar
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					query={query}
				/>
			</div>

			<HomeTrafficCam />

			<HomeErp />
		</div>
	);
};

export default Home;
