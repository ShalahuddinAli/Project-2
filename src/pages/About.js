import axios from "axios";
const About = () => {
	let config = {
		method: "get",
		url: "http://datamall2.mytransport.sg/ltaodataservice/Traffic-Imagesv2",
		headers: {
			AccountKey: "bJDCp1FERRazficXEZBtmg==",
			Accept: "application/json",
		},
	};

	axios(config)
		.then((response) => {
			console.log(JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});

	return (
		<div className="about">
			<h1>About</h1>
		</div>
	);
};

export default About;
