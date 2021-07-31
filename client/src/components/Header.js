import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		background: 'linear-gradient(10deg, #ED715D 50%, #EDB95D 90%)',
	},
	toolbarTitle: {
		fontFamily: 'Cinzel',
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'center',
		backgroundColor: '#EDB95D',
	},
	toolbarLink: {
		padding: theme.spacing(2),
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Box>
			<Toolbar className={classes.toolbar}>
				<Button size="small">Subscribe</Button>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					className={classes.toolbarTitle}>
					Parking Hunter
				</Typography>
				<Button variant="outlined" size="small" href="/admin">
					Admin Access
				</Button>
			</Toolbar>
			<Toolbar
				component="nav"
				variant="dense"
				className={classes.toolbarSecondary}>
				<nav>
					<Link
						variant="button"
						color="textPrimary"
						href="/"
						className={classes.toolbarLink}>
						Home
					</Link>
					<Link
						variant="button"
						color="textPrimary"
						href="/about"
						className={classes.toolbarLink}>
						About
					</Link>
					<Link
						variant="button"
						color="textPrimary"
						href="/contact"
						className={classes.toolbarLink}>
						Contact
					</Link>
				</nav>
			</Toolbar>
		</Box>
	);
};

export default Header;
