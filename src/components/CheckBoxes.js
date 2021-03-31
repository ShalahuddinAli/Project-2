import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
	},
	formControl: {
		margin: theme.spacing(10),
		display: "flex",
		justifyContent: "center",
	},
}));

const CheckBoxes = ({ area, check, handleChange }) => {
	console.log("state", check);
	for (const prop in check) {
		console.log(check[prop]);
	}

	const classes = useStyles();
	const arrBool = Object.values(check);

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
