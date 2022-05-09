import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { MapDirectionIcon } from '../../assets/Svg';

const LocationCard = ({ carpark }) => {
	const [mapRedirectObj, setMapRedirectObj] = useState({
		xCoord: '',
		yCoord: '',
	});

	const url = `https://developers.onemap.sg/commonapi/convert/3414to4326?X=${carpark.xCoord}&Y=${carpark.yCoord}`;

	useEffect(() => {
		axios.get(url).then((res) => {
			setMapRedirectObj({
				xCoord: res.data.latitude,
				yCoord: res.data.longitude,
			});
		});
	}, []);

	return (
		<div className="border-2 m-4 p-4 h-64 rounded-lg shadow-lg">
			<div className="flex justify-end flex-row">
				<button
					href={`https://www.google.com/maps?saddr=My+Location&daddr=${mapRedirectObj.xCoord},${mapRedirectObj.yCoord}`}
					target="_blank"
					edge="start"
					className="hover:bg-secondary rounded-full mb-1 md:mb-2">
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
