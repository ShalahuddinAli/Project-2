import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
// import availData from "./components/test_data";
// import queryData from "./components/data_test";

function App() {
	const [queryCpObj, setQueryCpObj] = useState({
		location: "",
		availability: "",
		queryLocation: "",
	});
	// const [bool, setBool] = useState(true);
	// const [cpResult, setCpResult] = useState({});

	const api = process.env.REACT_APP_API_KEY; //(process.env)// in vercel need to specify as .env file is ignored

	const urlLocation = `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=${queryCpObj.queryLocation}`;
	const urlAvailability = `https://api.data.gov.sg/v1/transport/carpark-availability`;

	useEffect(() => {
		axios.get(urlLocation).then((res) => {
			setQueryCpObj({ ...queryCpObj, location: res.data.result.records });

			axios.get(urlAvailability).then((res) => {
				setQueryCpObj({
					...queryCpObj,
					availability: res.data.items[0].carpark_data,
				});
			});
		});
		// setBool(!bool);
	}, [queryCpObj.queryLocation]);

	console.log(api);
	console.log(queryCpObj.availability);
	console.log(queryCpObj.location);

	// const qData = queryData.result.records;
	// let cpQueryResult = cpLocation.map((element) => {
	// 	return {
	// 		address: element.address,
	// 		nonSeasonLot: element.short_term_parking,
	// 		freeParking: element.free_parking,
	// 		car_park_no: element.car_park_no,
	// 	};
	// });

	// console.log("before", queryCpObj.location);
	// useEffect(() => {
	// 	const result = [];
	// 	for (const item of queryCpObj.location) {
	// 		for (const element of queryCpObj.availability) {
	// 			if (item.car_park_no === element.carpark_number) {
	// 				result.push({
	// 					address: item.address,
	// 					availableLots: element.carpark_info[0].lots_available,
	// 					totalLots: element.carpark_info[0].total_lots,
	// 					nonSeasonLot: item.short_term_parking,
	// 					freeParking: item.free_parking,
	// 					cpId: item.car_park_no,
	// 				});
	// 			}
	// 		}
	// 	}
	// 	setCpResult(result);
	// }, [bool]);

	// console.log("after", cpResult);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryCpObj({ ...queryCpObj, queryLocation: e.target.query.value });
	};

	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>

			<main>
				<form onSubmit={handleSubmit}>
					<input type="text" name="query" />
					<input type="submit" />
				</form>
				<section></section>
				<article>
					<div>Traffic Cam</div>
					<div>ERP rates</div>
				</article>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
