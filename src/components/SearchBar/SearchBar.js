const SearchBar = (props) => {
	const result = props.result.map((element) => (
		<section key={element.cpId}>
			<p>{element.address} </p>
			<p>Available lots: {element.availableLots}</p>
			<p>Total lots: {element.totalLots}</p>
			<p>Free parking: {element.freeParking}</p>
			<p>Non season parking: {element.nonSeasonLot}</p>
		</section>
	));

	return (
		<main>
			<form onSubmit={props.handleSubmit}>
				{props.isLoading && <div>Loading......</div>}
				<input type="text" name="query" />
				<input type="submit" />
			</form>
			<h2>Showing results for "{props.query}"</h2>
			{result}
		</main>
	);
};

export default SearchBar;
