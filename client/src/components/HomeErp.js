import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import img from '../img/erp.jpeg';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '70vh',
		marginBottom: '10vh',
	},
	image: {
		background: `radial-gradient(circle at center, transparent, mistyrose), url(${img})`,
		borderRadius: '50%',
		backgroundPosition: 'center',
	},
	itemContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	desc: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			transition: '100ms',
			fontSize: 'large',
		},
	},
}));
const HomeErp = ({ element }) => {
	const classes = useStyles();
	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={6} className={classes.image} />
			<Grid
				item
				container
				xs={6}
				direction="column"
				className={classes.itemContainer}>
				<Grid item className={classes.title} xs={6}>
					<Typography component="h1" variant="h4">
						Electronic Road Pricing(ERP)
					</Typography>
				</Grid>
				<Grid item className={classes.desc} xs={6}>
					<Typography component="h1" variant="h5">
						Check the Electronic Road Pricing (ERP) rates for different roads at
						specific times of the day.
					</Typography>
					<Link component={RouterLink} to="/erp" className={classes.link}>
						Find out more <ArrowForwardIcon fontSize="small" />
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HomeErp;
