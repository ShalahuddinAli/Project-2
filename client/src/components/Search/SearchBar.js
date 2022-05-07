import { SearchIcon } from '../../assets/Svg';

const SearchBar = ({ handleSubmit, isLoading }) => {
	return (
		<form
			className="flex bg-[#f5f5f5] py-0 px-2 rounded-2xl w-1/2 shadow-lg"
			onSubmit={(e) => handleSubmit(e)}>
			<input
				className="w-full rounded-full bg-transparent pl-3 focus:outline-none"
				placeholder="Search..."
				name="query"
				required
			/>
			<button
				type="submit"
				className=" rounded-full hover:bg-slate-200 "
				aria-label="search">
				<SearchIcon
					className={`h-12 w-12 p-0 text-primary ${
						isLoading ? 'animate-spin' : 'hover:-rotate-90'
					}`}
				/>
			</button>
		</form>
	);
};

export default SearchBar;
