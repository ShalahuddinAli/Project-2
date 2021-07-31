import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#f5f5f5',
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '50vw',
		borderRadius: 20,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}));

const SearchBar = ({ handleSubmit, query }) => {
	const classes = useStyles();
	return (
		<Box
			component="form"
			className={classes.root}
			boxShadow={6}
			elevation={6}
			onSubmit={(e) => handleSubmit(e)}>
			<InputBase
				className={classes.input}
				placeholder="Search Parking Lots"
				inputProps={{ 'aria-label': 'search parking lots' }}
				name="query"
				required
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search">
				<SearchIcon />
			</IconButton>
		</Box>
	);
};

export default SearchBar;
