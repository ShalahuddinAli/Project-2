import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from '../components/Search/SearchBar';
import LocationCard from '../components/Search/LocationCard';

const SearchResult = () => {
	const [searchParams] = useSearchParams();
	const [result, setResult] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const query = searchParams.get('location');

	useEffect(() => {
		const controller = new AbortController();

		if (query !== null) {
			const getQueryData = async () => {
				setResult([]);
				setError(null);
				setLoading(true);
				try {
					const res = await axios.get(`/proxyServer/carpark/${query}`);

					if (!res?.data?.length) {
						throw new Error(res.data.message);
					}
					setResult(res.data);
				} catch (err) {
					setResult([]);
					setError(err);
				} finally {
					setLoading(false);
				}
			};
			getQueryData();
		}
		return () => {
			controller.abort();
		};
	}, [query]);

	const NoQueryComponent = () => {
		return (
			<div className="flex mt-64 justify-center items-center text-lg">
				<h1>Please key in a query</h1>
			</div>
		);
	};

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
			{loading ? <LoadingComponent /> : null}
			{error ? <ErrorComponent /> : null}
			{query === null && !loading && !error ? <NoQueryComponent /> : null}
			{!loading && !error && query !== null ? (
				<div className="mx-1 md:mx-6">
					<h2 variant="h4" className="mt-6 mx-3 text-xl md:text-2xl">
						{`Showing results for "${query}"`}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{result.map((carpark, index) => (
							<LocationCard carpark={carpark} key={index} />
						))}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default SearchResult;
