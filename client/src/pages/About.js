import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({}));

export default function About() {
	const classes = useStyles();

	return (
		<Paper
			className={classes.mainFeaturedPost}
			//   style={{ backgroundImage: `url(${post.image})` }}
		>
			{/* Increase the priority of the hero background image */}
			{
				// <img
				//   style={{ display: "none" }}
				//   src={post.image}
				//   alt={post.imageText}
				// />
			}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography
							component="h1"
							variant="h3"
							color="inherit"
							gutterBottom>
							About
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							About
						</Typography>
						<Link variant="subtitle1" href="#">
							About
						</Link>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}
