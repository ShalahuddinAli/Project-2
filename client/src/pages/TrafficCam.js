import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'query-string';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TrafficCard from '../components/TrafficCard';
import CamLocation from '../CameraLocation';
import CheckBoxes from '../components/CheckBoxes';

const TrafficCam = () => {
	const [trafficImg, setTrafficImg] = useState([]);
	const [resultImg, setResultImg] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const camImageUrl = '/proxyServer/traffic_cam';

		axios
			.get(camImageUrl)
			.then((res) => {
				setTrafficImg(res.data);
				console.log(res.data, 'hellooo');
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//  Initialize expressway object checkbox value
	const areaBool = (camera) => {
		const area = {};
		for (const element of camera) {
			area[element.area] = false;
		}
		return area;
	};

	const [checkBox, setCheckBox] = useState(areaBool(CamLocation));

	// to segregate the expressway with "true" value into a single array
	const trueArr = (check) => {
		const arr = [];
		for (const element of Object.keys(check)) {
			if (checkBox[element] === true) {
				arr.push(element);
			}
		}
		return arr;
	};

	const handleChange = (event) => {
		setCheckBox({ ...checkBox, [event.target.name]: event.target.checked });
	};

	useEffect(() => {
		//match the key with "true" value with the data.
		if (checkBox) {
			const result = [];

			for (const item of CamLocation) {
				if (checkBox[item.area]) {
					result.push(item);
				}
			}

			setResultImg(result);
		}
		// query string for traffic cam checkbox
		history.replace({
			pathname: '/traffic_cam',
			search: qs.stringify({ area: trueArr(checkBox) }),
		});
	}, [checkBox]);

	const trafficImageResult = (trafficData) => {
		const filterImgObj = {};

		for (const img of resultImg) {
			filterImgObj[img.camera_id] = img;
		}

		return trafficData.map((element) => {
			if (filterImgObj[element.camera_id])
				return (
					<Grid item key={element.camera_id}>
						<TrafficCard
							img={element.image}
							location={element.location}
							id={element.camera_id}
							road={filterImgObj[element.camera_id].location}
							cluster={filterImgObj[element.camera_id].area}
						/>
					</Grid>
				);
		});
	};

	return (
		<div>
			<Container justify="center">
				<Box display="flex" justifyContent="center">
					<Typography variant="h3">Traffic Cameras</Typography>
				</Box>
				<CheckBoxes
					area={areaBool(CamLocation)}
					checkBox={checkBox}
					handleChange={handleChange}
				/>

				<Grid container>{trafficImg && trafficImageResult(trafficImg)}</Grid>
			</Container>
		</div>
	);
};

export default TrafficCam;
