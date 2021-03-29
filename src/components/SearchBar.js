import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const SearchBar = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className="search_bar">
			<SearchIcon className="search_inputIcon" />
			<input type="text" name="query" />
			<div className="search_button">
				<Button type="submit" variant="outlined">
					Where To Park?
				</Button>
			</div>
		</form>
	);
};

export default SearchBar;
