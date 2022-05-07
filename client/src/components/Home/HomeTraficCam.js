import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import img from '../../assets/images/trafficCam.jpeg';

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
		display: 'flex',
		background: 'linear-gradient(45deg, #ED715D 30%, #EDB95D 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		alignItems: 'center',
	},
}));
const HomeTrafficCam = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root} component={Paper}>
			<Grid item className={classes.titleContainer}>
				<Typography component="h1" variant="h4" className={classes.desc}>
					To view
					<br />
					real-time footage of traffic <br />
					conditions at specific locations, click on the BUTTON below.
				</Typography>
				<br />
				<br />
				<Button
					className={classes.btn}
					component={RouterLink}
					to="/traffic_cam">
					<DoubleArrowIcon fontSize="medium" color="action" />
					<DoubleArrowIcon fontSize="medium" color="action" />
					<DoubleArrowIcon fontSize="medium" color="action" />
				</Button>
			</Grid>
		</Grid>
	);
};

export default HomeTrafficCam;
