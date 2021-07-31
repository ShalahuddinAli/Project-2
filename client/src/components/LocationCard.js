import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MapTwoToneIcon from '@material-ui/icons/MapTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

function LocationCard({ element }) {
	const useStyles = makeStyles({
		root: {
			margin: 20,
			height: 300,
		},
		lots: {
			display: 'inline',
		},
	});
	const [mapRedirectObj, setMapRedirectObj] = useState({
		xCoord: '',
		yCoord: '',
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

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<Box display="flex" justifyContent="flex-end" flexDirection="row">
				<IconButton
					href={`https://www.google.com/maps?saddr=My+Location&daddr=${mapRedirectObj.xCoord},${mapRedirectObj.yCoord}`}
					target="_blank"
					edge="start"
					className={classes.btnIcon}>
					<MapTwoToneIcon />
				</IconButton>
			</Box>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h6">
					{element.address}
				</Typography>
				<Typography variant="body1" color="textSecondary">
					Available lots:
					<Typography
						className={classes.lots}
						color={element.availableLots < 5 ? 'error' : 'textSecondary'}>
						{element.availableLots}
					</Typography>
				</Typography>
				<Typography variant="body1" color="textSecondary">
					Total lots: {element.totalLots}
				</Typography>
				<Typography variant="body1" color="textSecondary">
					Free parking: {element.freeParking}
				</Typography>
				<Typography variant="body1" color="textSecondary">
					Non-season parking: {element.nonSeasonLot}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default LocationCard;
