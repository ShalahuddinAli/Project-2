import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			{new Date().getFullYear()}
			{'.'}
			<Link to="/">Parking Hunter</Link>{' '}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	buttonProgress: {
		position: 'relative',
		bottom: '46px',
		left: '155px',
	},
}));

const AdminLogin = () => {
	const classes = useStyles();
	const [admin, setAdmin] = useState({ username: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState({ status: true, message: '' });

	const navigate = useNavigate();

	const { username, password } = admin;
	const { status, message } = success;

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess({ status: true, message: '' });
		axios
			.post(`/admin/login/`, {
				username: e.target.username.value,
				password: e.target.password.value,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data.accessToken) {
					localStorage.setItem('token', res.data.accessToken);
					navigate('/');
				} else {
					setSuccess({ status: false, message: res.data });
					console.log(res.data);
				}
			})
			.catch((error) => {
				console.error(error);
				setSuccess({ status: false, message: error.data });
			})
			.finally(() => {
				setAdmin({ username: '', password: '' });
				setLoading(false);
			});
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Admin Access
					</Typography>
					<form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
						{!status && <Alert severity="error">{message}</Alert>}
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Admin Username"
							name="username"
							value={username}
							autoFocus
							onChange={(e) =>
								setAdmin({ ...admin, [e.target.name]: e.target.value })
							}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							value={password}
							autoComplete="current-password"
							onChange={(e) =>
								setAdmin({ ...admin, [e.target.name]: e.target.value })
							}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							disabled={loading}
							className={classes.submit}>
							Sign In
						</Button>
						{loading && (
							<CircularProgress
								size={24}
								className={classes.buttonProgress}
								color="primary"
							/>
						)}
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};
export default AdminLogin;
