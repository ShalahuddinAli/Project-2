import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticker, { NewsTicker } from 'nice-react-ticker';

const GetNews = () => {
	const [news, setNews] = useState('');

	useEffect(() => {
		const getTrafficNews = async () => {
			try {
				const { data } = await axios.get('/proxyServer/traffic-news');
				setNews(data);
			} catch (error) {
				console.error(error, 'incident');
			}
		};
		getTrafficNews();
	}, []);

	// useEffect(() => {
	// 	console.log(news, 'hello');
	// }, [news]);

	return news ? (
		news.map((item, index) => (
			<NewsTicker
				key={index}
				id={index}
				title={item.Message}
				className="news"
			/>
		))
	) : (
		<NewsTicker title="No Traffic Incident... Drive Safe!!!" className="news" />
	);
};

const IncidentsTicker = () => {
	return (
		<div className="w-full">
			<Ticker isNewsTicker={true} show={true}>
				<GetNews />
			</Ticker>
		</div>
	);
};

export default IncidentsTicker;
