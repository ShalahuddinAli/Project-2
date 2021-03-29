import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TrafficCard from "../components/TrafficCard";
import CamLocation from "../CameraLocation";

function TrafficCam() {
	const [trafficImg, setTrafficImg] = useState([]);

	useEffect(() => {
		const camImageUrl = "https://api.data.gov.sg/v1/transport/traffic-images";

		axios.get(camImageUrl).then((res) => {
			console.log(res.data.items[0].cameras);
			setTrafficImg(res.data.items[0].cameras);
		});
	}, []);

	return (
		<div>
			<Container>
				<Typography variant="h3">Traffic Cameras</Typography>
				<Grid container>
					{trafficImg &&
						trafficImg.map(
							(element) =>
								CamLocation.map((item) => {
									if (element.camera_id === item.camera_id)
										return (
											<Grid item key={element.camera_id}>
												<TrafficCard
													img={element.image}
													location={element.location}
													id={element.camera_id}
													road={item.location}
												/>
											</Grid>
										);
								})
							// if (element.camera_id === CamLocation)
						)}
				</Grid>
			</Container>
		</div>
	);
}

export default TrafficCam;
