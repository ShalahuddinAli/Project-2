import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResult from "./pages/SearchResult";
import TrafficCam from "./pages/TrafficCam";
import Erp from "./pages/Erp";

const App = () => {
	// const [queryCpObj, setQueryCpObj] = useState({
	// 	location: "", //store response
	// 	availability: "",
	// 	queryLocation: "", // store queried location
	// });
	// const [cpResult, setCpResult] = useState([]); // rendering data
     const [queryCpObj, setQueryCpObj] = useState({
          queryLocation: '',
          result:'',
     })

     const {queryLocation, result} = queryCpObj;

	const [isLoading, setIsLoading] = useState(false);

	const history = useHistory();

	// useEffect(() => {
	// 	if (queryCpObj.queryLocation) {
	// 		setIsLoading(true);
	// 		const requestLocation = axios.get(
	// 			`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q={"address":"${queryCpObj.queryLocation}"}`
	// 		);
	// 		const requestAvailability = axios.get(
	// 			`https://api.data.gov.sg/v1/transport/carpark-availability`
	// 		);

	// 		axios.all([requestLocation, requestAvailability]).then(
	// 			axios.spread((...res) => {
	// 				setQueryCpObj({
	// 					...queryCpObj,
	// 					location: res[0].data.result.records,
	// 					availability: res[1].data.items[0].carpark_data,
	// 				});
	// 				setIsLoading(false);
	// 			})
	// 		);
	// 	}
	// }, [queryCpObj.queryLocation]);

	// useEffect(() => {
	// 	if (queryCpObj.location && queryCpObj.availability) {
	// 		const result = [];
	// 		for (const item of queryCpObj.location) {
	// 			for (const element of queryCpObj.availability) {
	// 				if (item.car_park_no === element.carpark_number) {
	// 					// compare both data, then merge into 1 state to render data
	// 					result.push({
	// 						address: item.address,
	// 						availableLots: element.carpark_info[0].lots_available,
	// 						totalLots: element.carpark_info[0].total_lots,
	// 						nonSeasonLot: item.short_term_parking,
	// 						freeParking: item.free_parking,
	// 						xCoord: item.x_coord,
	// 						yCoord: item.y_coord,
	// 					});
	// 				}
	// 			}
	// 		}
	// 		setCpResult(result);
	// 	}
	// }, [isLoading]);

     useEffect(() => {
console.log(result);
     })

     const handleChange = (e) => {
          setQueryCpObj({...queryCpObj, [e.target.name]: e.target.value})
          // console.log(e.target.name);
     }

	const handleSubmit = (e) => {
		e.preventDefault();
		// setQueryCpObj({
		// 	result: "",
		// 	queryLocation: e.target.query.value,
		// });
          console.log(e.target.queryLocation.value);
axios.get(`http://localhost:4444/proxyServer/carparks/${queryLocation}`).then(res=>{
     setQueryCpObj({...queryCpObj, result:res.data});
})
		// if (queryCpObj.queryLocation !== e.target.queryLocation.value) {
		// 	setQueryCpObj({
          //           ...queryCpObj,
          //           result:[]
          //      });
               history.push({
  pathname: '/search_result',
  search: `?location=${queryLocation}`,
  state: { data: result}
})
		// }
	};
	return (
		<div className="App">
			<header>
				<h1>¿Where To Park?</h1>
				<div className="navbar_container">
					<NavBar />
				</div>
			</header>
			<Switch>
				<Route path="/" exact>
					<Home handleSubmit={handleSubmit} handleChange={handleChange} query={queryCpObj.queryLocation}/>
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/search_result">
					<SearchResult
						isLoading={isLoading}
						query={queryCpObj.queryLocation}
						result={queryCpObj.result}
						handleSubmit={handleSubmit}
                              handleChange={handleChange}
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
};

export default App;
