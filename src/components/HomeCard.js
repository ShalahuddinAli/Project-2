import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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
			<Card className={classes.root} direction="row" justify="space-around">
				<Link to={element.title === "Traffic cam" ? "/traffic_cam" : "/erp"}>
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
				</Link>
			</Card>
		</div>
	);
}

export default HomeCard;
