import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function test_data() {
	const [trafficImg, setTrafficImg] = useState("");
	const [trafficLocation, setTrafficLocation] = useState("");
	const camImageUrl = "https://api.data.gov.sg/v1/transport/traffic-images";

	useEffect(() => {
		axios.get(camImageUrl).then((res) => {
			console.log(res.data.items[0]);
			const latitude = res.data.items[0].cameras[0].location.latitude;
			const longitude = res.data.items[0].cameras[0].location.longitude;
			setTrafficImg(res.data.items[0].cameras);
		});
	}, [trafficImg]);

	const jump = trafficImg.map((element, index) => {
		{
			image: element;
		}
	});
	return <div>Hello</div>;
}

export default test_data;
