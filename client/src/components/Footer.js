import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '@material-ui/core/Box';

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
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
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
			<Box
				component="div"
				display="flex"
				direction="row"
				justifyContent="flex-end"
				alignItems="center"
				width="29%">
				<Copyright />
				<Box component="div" marginLeft="2vw">
					<IconButton
						aria-label="GitHub"
						className={classes.btn}
						size="small"
						href="https://github.com/ShalahuddinAli/carpark-finder-app"
						target="_blank">
						<GitHubIcon fontSize="small" />
					</IconButton>
					<IconButton
						aria-label="LinkedIn"
						className={classes.btn}
						size="medium"
						href="https://www.linkedin.com/in/shalahuddin-ali/"
						target="_blank">
						<LinkedInIcon fontSize="small" />
					</IconButton>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;
