import axios from 'axios';

// const authToken = localStorage.getItem('token');
// const axiosInstance = axios.create({});

// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		config.headers = {
// 			'Content-Type': 'application/json',
// 			'x-auth-token': JSON.parse(localStorage.getItem('token')),
// 		};
// 		config.withCredentials = true;
// 		return config;
// 	},
// 	(error) => {
// 		Promise.reject(error);
// 	}
// );

// axiosInstance.interceptors.response.use(
// 	(res) => {
// 		return res;
// 	},
// 	async (error) => {
// 		const originalRequest = error.config;

// 		if (error.response.status === 403 && !originalRequest.retry) {
// 			localStorage.removeItem('token');
// 			originalRequest.retry = true;
// 			const accessToken = await refreshAccessToken();
// 			axios.defaults.headers.common['x-auth-token'] = accessToken;
// 			return axiosInstance(originalRequest);
// 		}
// 		return Promise.reject(error);
// 	}
// );

// const refreshAccessToken = async () => {
// 	const { data } = await axios.post('/admin/refresh-token');
// 	localStorage.setItem('token', data.accessToken);
// 	return data.accessToken;
// };
// export default axiosInstance;
