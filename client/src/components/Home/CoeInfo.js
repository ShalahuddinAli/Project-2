import React, { useState, useEffect } from 'react';
import TrendUp from '@heroicons/react/outline/ChevronDoubleUpIcon';
import TrendDown from '@heroicons/react/outline/ChevronDoubleDownIcon';

import coeInfo from '../../coeInfo';

const CoeInfo = () => {
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
		<div className="flex flex-col items-center md:flex-row md:my-8 w-full">
			{coe.map((item, index) => (
				<div
					key={index}
					className="my-2 w-full md:m-3 md:shadow-xl md:border md:rounded-lg">
					<div className="flex bg-coe justify-center md:flex-col md:items-center md:h-20 md:rounded-t-lg customcoe:h-14">
						<p className="text-xs md:text-base">{item.category}</p>
						<p className="text-xs md:px-2">({item.descriptions})</p>
					</div>
					<div className="flex justify-around pt-3 md:py-5">
						<div className="flex md:flex-col md:justify-center">
							<p className="text-sm md:hidden">Change:</p>
							{item.changes === 'increase' ? (
								<TrendUp className="h-4 text-red-600 mt-0.5 align-bottom md:text-base md:h-8" />
							) : (
								<TrendDown className="h-4 text-green-600 mt-0.5 md:text-base md:h-6" />
							)}
							<p
								className={`text-sm ${
									item.changes === 'increase'
										? 'text-red-600'
										: 'text-green-600'
								} w-14 text-left md:text-center md:text-xs`}>
								${numberWithCommas(item.amount)}
							</p>
						</div>
						<div className="flex md:flex-col">
							<p className="text-sm md:hidden">Quota Premium:</p>
							<p className="text-sm md:text-lg md:text-center">
								${numberWithCommas(item.premium)}
							</p>
							<p className="text-xs hidden md:inline-flex text-center">
								(Quota Premium)
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CoeInfo;
