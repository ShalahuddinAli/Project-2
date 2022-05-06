import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import SearchResult from './pages/SearchResult';
import TrafficCam from './pages/TrafficCam';
import CoeData from './pages/CoeData';
import AddCoe from './pages/AddCoe';
import Erp from './pages/Erp';

const App = () => {
	const auth = localStorage.getItem('token');
	const [coe, setCoe] = useState('');
	const [loading, setLoading] = useState(false);

	const [queryCpObj, setQueryCpObj] = useState({
		queryLocation: '',
		result: [],
		isLoading: false,
	});

	const { queryLocation, result, isLoading } = queryCpObj;
	const navigate = useNavigate();

	useEffect(() => {
		const getCoe = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get('/coe/getCoe');
				setCoe(data);
			} catch (error) {
				console.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getCoe();
	}, []);

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
	}, [queryLocation]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryCpObj({
			result: [],
			isLoading: true,
			queryLocation: e.target.query.value,
		});
	};

	if (loading) {
		return <h3>Loading...</h3>;
	}
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1">
				<Routes>
					{!auth && <Route path="/login" element={<AdminLogin />} />}
					<Route
						path="/"
						element={
							<Home
								handleSubmit={handleSubmit}
								query={queryLocation}
								coe={coe.data}
							/>
						}
					/>
					{/* {auth && ( */}
					<Route path="/coe" element={<CoeData auth={auth} coe={coe} />} />
					{/* )} */}
					<Route path="/add-coe" element={<AddCoe auth={auth} coe={coe} />} />
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
					<Route path="/erp" element={<Erp />} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
