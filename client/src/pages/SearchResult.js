import Loading from '../components/Loading';
import SearchBar from '../components/Search/SearchBar';
import LocationCard from '../components/Search/LocationCard';

const SearchResult = ({ result, query, isLoading, handleSubmit }) => {
	return (
		<div>
			<div className="flex justify-center mt-5">
				<SearchBar handleSubmit={handleSubmit} isLoading={isLoading} />
			</div>
			<div className="mx-1 md:mx-6">
				{isLoading ? (
					<h2 className="mt-6 mx-3 text-xl md:text-2xl">
						Searching for "{query}"
						<Loading />
					</h2>
				) : (
					<h2 variant="h4" className="mt-6 mx-3 text-xl md:text-2xl">
						{!result.length
							? `No result found for "${query}"`
							: `Showing results for "${query}"`}
					</h2>
				)}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{result &&
						result.map((element, index) => (
							<LocationCard element={element} key={index} />
						))}
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
