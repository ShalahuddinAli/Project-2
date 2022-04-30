import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
	const navigate = useNavigate();

	useEffect(() => {
		if (queryCpObj.queryLocation) {
			navigate({
				pathname: '/search_result',
				search: `?location=${queryLocation}`,
			});
			axios
				.get(`/proxyServer/carpark/${queryLocation}`)
				.then((res) => {
					console.log(res.data, 'search');
					setQueryCpObj({ ...queryCpObj, result: res.data, isLoading: false });
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [queryLocation, navigate, queryCpObj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryCpObj({
			result: [],
			isLoading: true,
			queryLocation: e.target.query.value,
		});
	};
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1">
				<Routes>
					<Route path="/admin" element={<AdminLogin />} />
					<Route
						path="/"
						element={<Home handleSubmit={handleSubmit} query={queryLocation} />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/search_result"
						element={
							<SearchResult
								isLoading={isLoading}
								query={queryLocation}
								result={result}
								handleSubmit={handleSubmit}
								// handleChange={handleChange}
							/>
						}
					/>
					<Route path="/traffic_cam" element={<TrafficCam />} />
					<Route path="/erp" element={<Erp />} />]
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
