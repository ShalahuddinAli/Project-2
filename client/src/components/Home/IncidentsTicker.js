import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticker, { NewsTicker } from 'nice-react-ticker';

const GetNews = () => {
	const [news, setNews] = useState('');
	useEffect(() => {
		axios
			.get('/proxyServer/traffic_news')
			.then((res) => {
				setNews(res.data);
				console.log(res.data, 'incidents');
			})
			.catch((err) => {
				console.error(err, 'incident');
			});
	}, []);

	useEffect(() => {
		console.log(news, 'hello');
	}, [news]);

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
