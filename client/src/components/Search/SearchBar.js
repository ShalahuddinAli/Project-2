import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../../assets/Svg';

const SearchBar = ({ loading }) => {
	const queryRef = useRef(null);
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();

		navigate(
			{
				pathname: '/search-result',
				search: `?location=${queryRef.current.value}`,
			},
			{ replace: true }
		);
		queryRef.current.value = '';
	};
	return (
		<form
			className="flex bg-[#f5f5f5] py-0 px-2 rounded-2xl w-3/5 shadow-lg"
			onSubmit={handleSearch}>
			<input
				className="w-full text-sm rounded-full bg-transparent pl-3 md:text-md xl:text-lg focus:outline-none"
				placeholder="Search..."
				name="query"
				ref={queryRef}
				required
			/>
			<button
				type="submit"
				className=" rounded-full hover:bg-slate-200 "
				aria-label="search">
				<SearchIcon
					className={`h-8 w-8 p-0 text-primary ${
						loading ? 'animate-spin' : 'hover:-rotate-90'
					} md:h-12 md:w-12 `}
				/>
			</button>
		</form>
	);
};

export default SearchBar;
