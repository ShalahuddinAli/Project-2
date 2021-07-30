import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			{new Date().getFullYear()} <Link to="/contact">Shalahuddin Ali</Link>
		</Typography>
	);
};

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#E8492F',
		marginTop: 'auto',
		padding: '1em',
		width: '100%',
		fontFamily: 'Cinzel',
	},
	text: {
		fontFamily: 'Cinzel',
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography
				variant="h6"
				align="center"
				className={classes.text}
				gutterBottom>
				Parking Hunter
			</Typography>
			<Copyright />
		</footer>
	);
};

export default Footer;
