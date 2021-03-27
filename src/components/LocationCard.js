import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import Link from "@material-ui/core/Link";

function LocationCard({ element }) {
	const [mapRedirectObj, setMapRedirectObj] = useState({
		xCoord: "",
		yCoord: "",
	});

	const url = `https://developers.onemap.sg/commonapi/convert/3414to4326?X=${element.xCoord}&Y=${element.yCoord}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			setMapRedirectObj({
				xCoord: res.data.latitude,
				yCoord: res.data.longitude,
			});
		});
	}, []);

	console.log(mapRedirectObj.xCoord, mapRedirectObj.yCoord);
	const useStyles = makeStyles({
		root: {
			margin: 20,
			height: 250,
		},
		btn: {},
	});

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{element.address}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					Available lots: {element.availableLots}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					Total lots: {element.totalLots}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					Free parking: {element.freeParking}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					Non season parking: {element.nonSeasonLot}
				</Typography>
			</CardContent>

			<Link
				href={`https://www.google.com/maps/search/?api=1&query=${mapRedirectObj.xCoord},${mapRedirectObj.yCoord}`}
			>
				Map
			</Link>
		</Card>
	);
}

export default LocationCard;
