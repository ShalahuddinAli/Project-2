import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/Nav";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
	const [queryCpObj, setQueryCpObj] = useState({
		location: "",
		availability: "",
		queryLocation: "",
	});
	const [cpResult, setCpResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const api = process.env.REACT_APP_API_KEY; //(process.env)// in vercel need to specify as .env file is ignored

	useEffect(() => {
		if (queryCpObj.queryLocation) {
			console.log("wwwww");
			setIsLoading(true);
			const requestLocation = axios.get(
				`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q={"address":"${queryCpObj.queryLocation}"}`
			);
			const requestAvailability = axios.get(
				`https://api.data.gov.sg/v1/transport/carpark-availability`
			);

			axios.all([requestLocation, requestAvailability]).then(
				axios.spread((...res) => {
					setQueryCpObj({
						...queryCpObj,
						location: res[0].data.result.records,
						availability: res[1].data.items[0].carpark_data,
					});
					setIsLoading(false);
				})
			);
		}
	}, [queryCpObj.queryLocation]);

	useEffect(() => {
		if (queryCpObj.location && queryCpObj.availability) {
			const result = [];
			for (const item of queryCpObj.location) {
				for (const element of queryCpObj.availability) {
					if (item.car_park_no === element.carpark_number) {
						result.push({
							address: item.address,
							availableLots: element.carpark_info[0].lots_available,
							totalLots: element.carpark_info[0].total_lots,
							nonSeasonLot: item.short_term_parking,
							freeParking: item.free_parking,
							cpId: item.car_park_no,
						});
					}
				}
			}
			setCpResult(result);
		}
	}, [isLoading]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryCpObj({
			location: "",
			availability: "",
			queryLocation: e.target.query.value,
		});
	};

	return (
		<div className="App">
			<header>
				<NavBar />
			</header>

			<SearchBar
				result={cpResult}
				handleSubmit={handleSubmit}
				isLoading={isLoading}
				query={queryCpObj.queryLocation}
			/>

			<article>
				<div>Traffic Cam</div>
				<div>ERP rates</div>
			</article>

			<footer></footer>
		</div>
	);
}

export default App;
