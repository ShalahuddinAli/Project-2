import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import Loading from '../components/Loading';
import SearchBar from '../components/Search/SearchBar';
import LocationCard from '../components/Search/LocationCard';

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	const [result, setResult] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const query = searchParams.get('location');

	useEffect(() => {
		let mounted = true;
		const controller = new AbortController();

		const getQueryData = async () => {
			setResult([]);
			setLoading(true);
			try {
				const res = await axios.get(`/proxyServer/carpark/${query}`);

				console.log(res);
				if (!res?.data?.length) {
					throw new Error(res.data.message);
				}
				if (mounted) {
					setResult(res.data);
					setError(null);
				}
			} catch (err) {
				console.log(err.message, 'dataaa');
				if (mounted) {
					setResult([]);
					setError(err);
				}
			} finally {
				mounted && setLoading(false);
			}
		};
		getQueryData();
		return () => {
			mounted = false;
			controller.abort();
		};
	}, [query]);

	const LoadingComponent = () => {
		return (
			<div className="flex mt-64 justify-center items-center text-lg">
				<h1>Searching...</h1>
			</div>
		);
	};

	const ErrorComponent = () => {
		return (
			<div className="flex mt-64 justify-center items-center text-lg">
				<h1>{error.message}</h1>
			</div>
		);
	};

	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex justify-center mt-5">
				<SearchBar loading={loading} />
			</div>
			{loading && <LoadingComponent />}
			{error && <ErrorComponent />}
			{!loading && !error && (
				<div className="mx-1 md:mx-6">
					<h2 variant="h4" className="mt-6 mx-3 text-xl md:text-2xl">
						{`Showing results for "${query}"`}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{result.map((element, index) => (
							<LocationCard element={element} key={index} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchResult;
