import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrafficCard from "../components/TrafficCard";
import CamLocation from "../CameraLocation";
import CheckBoxes from "../components/CheckBoxes";

const TrafficCam = () => {
	const [trafficImg, setTrafficImg] = useState([]);
	const [resultImg, setResultImg] = useState([]);

	console.log("api", trafficImg);
	console.log("data", CamLocation);
	useEffect(() => {
		const camImageUrl = "https://api.data.gov.sg/v1/transport/traffic-images";

		axios.get(camImageUrl).then((res) => {
			setTrafficImg(res.data.items[0].cameras);
		});
	}, []);

	const area = {};
	for (const element of CamLocation) {
		area[element.area] = false;
	}
	const result = [];
	const [check, setCheck] = useState(area);
	for (const element of Object.keys(check)) {
		if (check[element] === true) {
			result.push(element);
		}
	}

	const handleChange = (event) => {
		setCheck({ ...check, [event.target.name]: event.target.checked });
	};

	useEffect(() => {
		if (check) {
			const resultAtLast = [];
			for (const element of result) {
				for (const item of CamLocation) {
					if (element === item.area) {
						resultAtLast.push(item);
					}
				}
			}
			setResultImg(resultAtLast);
		}
	}, [check]);

	return (
		<div>
			<Container justify="center">
				<Box display="flex" justifyContent="center">
					<Typography variant="h3">Traffic Cameras</Typography>
				</Box>
				<CheckBoxes area={area} check={check} handleChange={handleChange} />

				<Grid container>
					{resultImg &&
						trafficImg.map((element) =>
							resultImg.map((item) => {
								if (element.camera_id === item.camera_id)
									return (
										<Grid item key={element.camera_id}>
											<TrafficCard
												img={element.image}
												location={element.location}
												id={element.camera_id}
												road={item.location}
												cluster={item.area}
											/>
										</Grid>
									);
							})
						)}
				</Grid>
			</Container>
		</div>
	);
};

export default TrafficCam;