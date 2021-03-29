import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

function TrafficCard({ img, location, id, road }) {
	const useStyles = makeStyles({
		root: {
			margin: 30,
			height: 500,
			width: 500,
		},
		media: {
			height: 450,
			width: 450,
		},
	});

	const classes = useStyles();
	// const [trafficLocation, setTrafficLocation] = useState("");

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{id}
				</Typography>
				<Typography gutterBottom variant="h6">
					{location.latitude}, {location.longitude}, {road}
				</Typography>
				<CardMedia className={classes.media} image={img} />
			</CardContent>
		</Card>
	);
}

export default TrafficCard;
