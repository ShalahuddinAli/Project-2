import axios from 'axios';
import { useEffect, useState } from 'react';

import { MapDirectionIcon } from '../../assets/Svg';

const LocationCard = ({ carpark }) => {
	const [mapRedirectObj, setMapRedirectObj] = useState({
		xCoord: '',
		yCoord: '',
	});

	//to convert local gps coordinate to internationally recognised coordinate
	const url = `https://developers.onemap.sg/commonapi/convert/3414to4326?X=${carpark.xCoord}&Y=${carpark.yCoord}`;

	useEffect(() => {
		const controller = new AbortController();

		const convertCoords = async () => {
			try {
				const { data } = await axios.get(url);

				setMapRedirectObj({
					xCoord: data.latitude,
					yCoord: data.longitude,
				});
			} catch (error) {
				console.error(error);
				setMapRedirectObj({
					xCoord: '',
					yCoord: '',
				});
			}
		};
		convertCoords();
		return () => {
			controller.abort();
		};
	}, [url]);

	const handleDirection = () => {
		window.open(
			`https://www.google.com/maps?saddr=My+Location&daddr=${mapRedirectObj.xCoord},${mapRedirectObj.yCoord}`,
			'_blank'
		);
	};

	return (
		<div className="border-2 m-4 p-4 h-64 rounded-lg shadow-lg">
			<div className="flex justify-end flex-row">
				<button
					onClick={handleDirection}
					className="hover:bg-secondary rounded-full mb-1 md:mb-2 focus:normal-case">
					<MapDirectionIcon className="h-6 w-6 text-primary" />
				</button>
			</div>
			<div className="">
				<h1 className="text-lg my-1 normal-case">{carpark.address}</h1>
				<div>
					<h2 className="text-md text-gray-600">
						Available lots:
						<span
							className={`${
								carpark.availableLots < 5 ? 'text-red-600' : 'text-green-400'
							} ml-1`}>
							{carpark.availableLots}
						</span>
					</h2>
					<h2 className="text-md text-gray-600">
						Total lots: {carpark.totalLots}
					</h2>
					<h2 className="text-md text-gray-600">
						Free parking: {carpark.freeParking}
					</h2>
					<h2 className="text-md text-gray-600">
						Non-season parking: {carpark.nonSeasonLot}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default LocationCard;
