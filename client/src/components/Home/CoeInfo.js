import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CssBaseline from '@material-ui/core/CssBaseline';

import coeInfo from '../../coeInfo';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	paper: {
		width: 250,
		height: 150,
		justifyContent: 'center',
	},
	itemContent: {
		justifyContent: 'center',
		backgroundColor: '#EDB95D',
		height: '35%',
		alignItems: 'center',
	},
	cat: {
		textAlign: 'center',
	},
	desc: {
		textAlign: 'center',
	},

	premText: {
		textAlign: 'center',
	},
	prem: {
		justifyContent: 'center',
		height: '65%',
		width: '100%',
		alignItems: 'center',
	},
	iconContainer: {
		margin: '0 30px 0 0',
		height: '100%',
	},
	icon: {
		display: 'block',
		fontSize: 60,
	},
}));

const CoeInfo = () => {
	const classes = useStyles();
	const [coe, setCoe] = useState([]);

	useEffect(() => {
		setCoe(coeInfo);
	}, []);

	const numberWithCommas = (x) => {
		return Math.abs(x)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};
	return (
		<Grid
			container
			className={classes.root}
			spacing={2}
			xs={3}
			sm={6}
			md={9}
			lg={12}>
			{coe.map((item, index) => (
				<Grid item key={index}>
					<Paper className={classes.paper} elevation={3}>
						<Grid container className={classes.itemContent}>
							<Grid item>
								<Typography className={classes.cat} variant="h6">
									{item.category}
									<Typography variant="subtitle2" className={classes.desc}>
										({item.descriptions})
									</Typography>
								</Typography>
							</Grid>
						</Grid>
						<Grid container className={classes.prem}>
							<Grid item className={classes.iconContainer}>
								{item.premium.current > item.premium.previous ? (
									<TrendingUpIcon
										style={{ color: 'red' }}
										className={classes.icon}
									/>
								) : (
									<TrendingDownIcon
										style={{ color: 'green' }}
										className={classes.icon}
									/>
								)}
								<Typography
									variant="caption"
									style={{
										color:
											item.premium.current - item.premium.previous > 0
												? 'red'
												: 'green',
									}}
									className={classes.premDiff}>
									$
									{numberWithCommas(
										item.premium.current - item.premium.previous
									)}
								</Typography>
							</Grid>
							<CssBaseline />
							<Grid item>
								<Typography className={classes.premText} variant="h5">
									${numberWithCommas(item.premium.current)}
								</Typography>
								<Typography variant="subtitle2">(Quota Premium)</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default CoeInfo;
