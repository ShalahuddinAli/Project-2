import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	formControl: {
		margin: theme.spacing(10),
		display: 'flex',
		justifyContent: 'center',
	},
}));

const CheckBoxes = ({ area, checkBox, handleChange }) => {
	const classes = useStyles();
	const arrBool = Object.values(checkBox); // to store the values of check object (true or false)

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Choose Location:</FormLabel>
				<FormGroup row>
					{Object.keys(area).map((element, index) => (
						<FormControlLabel
							key={index}
							control={
								<Checkbox
									checked={arrBool[index]}
									onChange={handleChange}
									name={element}
								/>
							}
							label={element}
						/>
					))}
				</FormGroup>
			</FormControl>
		</div>
	);
};

export default CheckBoxes;
