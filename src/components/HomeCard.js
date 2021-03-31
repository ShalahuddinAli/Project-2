import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		marginRight: 100,
		marginLeft: 100,
		marginTop: 30,
		borderRadius: 20,
	},
	media: {
		height: 140,
	},
});

const HomeCard = ({ element }) => {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root} direction="row" justify="space-around">
				<Link to={element.title === "Traffic cam" ? "/traffic_cam" : "/erp"}>
					<CardActionArea className="home_card">
						<CardMedia className={classes.media} image={element.img.default} />
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								color="textPrimary"
							>
								{element.title}
							</Typography>
							<Typography variant="body2" color="textSecondary">
								{element.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default HomeCard;
