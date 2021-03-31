import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		margin: 30,
		height: 400,
		width: 500,
	},
	media: {
		height: 300,
		width: 470,
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		objectFit: "fill",
	},
});

function TrafficCard({ img, location, id, road, area }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{road}
				</Typography>
				<CardMedia className={classes.media} image={img} />
			</CardContent>
		</Card>
	);
}

export default TrafficCard;
