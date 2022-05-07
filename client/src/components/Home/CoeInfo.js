import React, { useState, useEffect } from 'react';
import TrendUp from '@heroicons/react/outline/ChevronDoubleUpIcon';
import TrendDown from '@heroicons/react/outline/ChevronDoubleDownIcon';
import { numberWithCommas } from '../../utils';

const CoeInfo = ({ coe }) => {
	const coeChanges = (current, prev) => current - prev;

	const changeSymbol = (current, prev) => {
		const changes = coeChanges(current, prev);

		if (changes > 0)
			return (
				<TrendUp className="h-4 text-red-600 mt-0.5 align-bottom md:text-base md:h-8" />
			);
		if (changes < 0)
			return (
				<TrendDown className="h-4 text-green-600 mt-0.5 md:text-base md:h-6" />
			);
		if (changes === 0)
			return (
				<span className="h-4 mt-0.5 align-bottom md:text-base md:h-8">-</span>
			);
	};

	const changeTextStyle = (current, prev) => {
		const changes = coeChanges(current, prev);
		if (changes > 0) return 'text-red-600';
		if (changes < 0) return 'text-green-600';
		if (changes === 0) return 'text-black';
	};
	return (
		<div className="flex flex-col w-full items-center md:flex-row md:my-8 md:w-11/12">
			{coe.map((item) => (
				<div
					key={item._id}
					className="my-2 w-full md:m-3 md:shadow-xl md:border md:rounded-lg">
					<div className="flex bg-coe justify-center md:flex-col md:items-center md:h-20 md:rounded-t-lg customcoe:h-14">
						<p className="text-xs md:text-base">{item.category}</p>
						<p className="text-xs md:px-2">({item.descriptions})</p>
					</div>
					<div className="flex justify-around pt-3 md:py-5">
						<div className="flex md:flex-col md:justify-center">
							<p className="text-sm md:hidden">Change:</p>
							{changeSymbol(item.current_premium, item.prev_premium)}
							<p
								className={`text-sm ${changeTextStyle(
									item.current_premium,
									item.prev_premium
								)} w-14 text-left md:text-center md:text-xs`}>
								$
								{numberWithCommas(
									coeChanges(item.current_premium, item.prev_premium)
								)}
							</p>
						</div>
						<div className="flex md:flex-col">
							<p className="text-sm md:hidden">Quota Premium:</p>
							<p className="text-sm md:text-lg md:text-center">
								${numberWithCommas(item.current_premium)}
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
