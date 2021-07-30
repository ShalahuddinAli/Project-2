import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import img from '../img/trafficCam.jpeg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '80vh',
		background: `linear-gradient(to left, transparent, mistyrose), url(${img})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		justifyContent: 'center',
		direction: 'column',
		alignItems: 'center',
		elevation: '4',
	},
	titleContainer: {
		display: 'block',
		width: '75%',
		position: 'relative',
	},
	desc: {
		backgroundColor: 'black',
		color: '#fff',
		display: 'inline',
		padding: '0.5rem',
	},
	btn: {
		position: 'absolute',
		right: '0',
		color: '#ED715D',
	},
}));
const HomeTrafficCam = () => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Grid container className={classes.root} component={Paper}>
			<Grid item className={classes.titleContainer}>
				<Typography component="h1" variant="h4" className={classes.desc}>
					To view
					<br />
					real-time footage of traffic <br />
					conditions at specific locations, click on the button below.
				</Typography>
				<br />
				<br />
				<Button
					className={classes.btn}
					onClick={() => history.push('/traffic_cam')}>
					<DoubleArrowIcon style={{ color: '#ED715D' }} fontSize="large" />
					<DoubleArrowIcon style={{ color: '#ED715D' }} fontSize="medium" />
					<DoubleArrowIcon style={{ color: '#ED715D' }} fontSize="small" />
				</Button>
			</Grid>
		</Grid>
	);
};

export default HomeTrafficCam;
