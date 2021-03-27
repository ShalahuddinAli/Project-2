import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const SearchBar = ({ handleSubmit, home }) => {
	return (
		<Container className={home ? "search_home" : "search_searchPage"}>
			<form onSubmit={handleSubmit} className="search_bar">
				<SearchIcon className="search_inputIcon" />
				<input type="text" name="query" />
				<div className="search_button">
					<Button type="submit" variant="outlined">
						Where To Park?
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default SearchBar;
