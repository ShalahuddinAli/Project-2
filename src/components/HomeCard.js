import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function HomeCard({ element }) {
	const useStyles = makeStyles({
		root: {
			marginRight: 100,
			marginLeft: 100,
		},
		media: {
			height: 140,
		},
	});
	const classes = useStyles();
	return (
		<div>
			<Card
				className={classes.root}
				container
				direction="row"
				justify="space-around"
				alignItems="center"
			>
				<CardActionArea className="home_card">
					<CardMedia className={classes.media} image={element.img.default} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{element.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{element.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}

export default HomeCard;
