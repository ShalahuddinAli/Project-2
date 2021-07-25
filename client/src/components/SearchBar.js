import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const SearchBar = ({ handleSubmit,handleChange,query }) => {
	return (
		<form onSubmit={(e)=>handleSubmit(e)} className="search_bar">
			<SearchIcon className="search_inputIcon" />
			<input type="text" name= 'queryLocation' value={query} onChange={(e)=>handleChange(e)} required />
			<div className="search_button">
				<Button type="submit" variant="outlined">
					Where To Park?
				</Button>
			</div>
		</form>
	);
};

export default SearchBar;
