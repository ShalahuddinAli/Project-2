import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const SearchBar = ({ handleSubmit,query }) => {
	return (
		<form onSubmit={(e)=>handleSubmit(e)} className="search_bar">
			<SearchIcon className="search_inputIcon" />
			<input type="text" name= 'query' required />
			<div className="search_button">
				<Button type="submit" variant="outlined">
					Where To Park?
				</Button>
			</div>
		</form>
	);
};

export default SearchBar;
