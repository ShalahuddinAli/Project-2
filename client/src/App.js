import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Erp from './pages/Erp';
import Home from './pages/Home';
import About from './pages/About';
import AddCoe from './pages/AddCoe';
import Loading from './pages/Loading';
import CoeData from './pages/CoeData';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import TrafficCam from './pages/TrafficCam';
import SearchResult from './pages/SearchResult';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	const auth = localStorage.getItem('token');
	const [coe, setCoe] = useState('');
	const [updateCoe, setUpdateCoe] = useState(false);
	const [loading, setLoading] = useState(false);

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
	}, [updateCoe]);

	if (loading) {
		return <Loading />;
	}
	return (
		<div className="flex flex-col min-h-screen w-screen ">
			<Header />
			<div className="flex-1 flex flex-col h-full">
				<Routes>
					{!auth && <Route path="/login" element={<AdminLogin />} />}
					<Route path="/" element={<Home coe={coe.data} />} />
					{auth && (
						<Route path="/coe" element={<CoeData auth={auth} coe={coe} />} />
					)}
					{auth && (
						<Route
							path="/add-coe"
							element={
								<AddCoe auth={auth} coe={coe} setUpdateCoe={setUpdateCoe} />
							}
						/>
					)}
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/search-result" element={<SearchResult />} />
					<Route path="/traffic-cam" element={<TrafficCam />} />
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
