import axios from 'axios';
import { Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import SearchResult from './pages/SearchResult';
import TrafficCam from './pages/TrafficCam';
import Footer from './components/Footer';
import Erp from './pages/Erp';

const App = () => {
	const [queryCpObj, setQueryCpObj] = useState({
		queryLocation: '',
		result: [],
		isLoading: false,
	});
	const { queryLocation, result, isLoading } = queryCpObj;

	const history = useHistory();

	useEffect(() => {
		if (queryCpObj.queryLocation) {
			history.push({
				pathname: '/search_result',
				search: `?location=${queryLocation}`,
			});
			axios
				.get(`http://localhost:4444/proxyServer/carpark/${queryLocation}`)
				.then((res) => {
					console.log(res.data, 'search');
					setQueryCpObj({ ...queryCpObj, result: res.data, isLoading: false });
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [queryLocation]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryCpObj({
			result: [],
			isLoading: true,
			queryLocation: e.target.query.value,
		});
	};
	return (
		<div className="App">
			<Switch>
				<Route path="/admin">
					<AdminLogin />
				</Route>
				<Fragment>
					<Header />
					<Route path="/" exact>
						<Home handleSubmit={handleSubmit} query={queryLocation} />
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
							query={queryLocation}
							result={result}
							handleSubmit={handleSubmit}
							// handleChange={handleChange}
						/>
					</Route>
					<Route path="/traffic_cam">
						<TrafficCam />
					</Route>
					<Route path="/erp">
						<Erp />
					</Route>
					<Footer />
				</Fragment>
			</Switch>
		</div>
	);
};

export default App;
