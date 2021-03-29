import axios from "axios";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResult from "./pages/SearchResult";
import TrafficCam from "./pages/TrafficCam";
import Erp from "./pages/Erp";

function App() {
	const [queryCpObj, setQueryCpObj] = useState({
		location: "",
		availability: "",
		queryLocation: "",
	});
	const [cpResult, setCpResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// function SearchButton() {
	const history = useHistory();

	// const api = process.env.REACT_APP_API_KEY; //(process.env)// in vercel need to specify as .env file is ignored
	// console.log(api);
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
			// .catch((error) => {
			// 	console.log(error.response.data.error);
			// });
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
							xCoord: item.x_coord,
							yCoord: item.y_coord,
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
		setCpResult([]);
		history.push("/searchResult");
	};
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<Switch>
				<Route path="/" exact>
					<Home handleSubmit={handleSubmit} />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/searchResult">
					<SearchResult
						isLoading={isLoading}
						query={queryCpObj.queryLocation}
						result={cpResult}
						handleSubmit={handleSubmit}
					/>
				</Route>
				<Route path="/traffic_cam">
					<TrafficCam />
				</Route>
				<Route path="/erp">
					<Erp />
				</Route>
			</Switch>

			<footer></footer>
		</div>
	);
}

export default App;
