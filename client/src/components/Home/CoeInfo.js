import TrendUp from '@heroicons/react/outline/ChevronDoubleUpIcon';
import TrendDown from '@heroicons/react/outline/ChevronDoubleDownIcon';
import { numberWithCommas } from '../../utils';

const CoeInfo = ({ coe }) => {
	const coeChanges = (current, prev) => current - prev;

	const changeSymbol = (current, prev) => {
		const changes = coeChanges(current, prev);

		if (changes > 0)
			return (
				<TrendUp className="h-3 text-red-600 mt-0.5 align-bottom lg:text-base lg:h-8" />
			);
		if (changes < 0)
			return (
				<TrendDown className="h-3 text-green-600 mt-0.5 lg:text-base lg:h-6" />
			);
		if (changes === 0)
			return (
				<span className="h-3 mt-0.5 align-bottom lg:text-base lg:h-8">-</span>
			);
	};

	const changeTextStyle = (current, prev) => {
		const changes = coeChanges(current, prev);
		if (changes > 0) return 'text-red-600';
		if (changes < 0) return 'text-green-600';
		if (changes === 0) return 'text-black';
	};
	return (
		<div className="flex flex-col w-full sm:w-6/12 items-center lg:flex-row lg:my-8 lg:w-11/12">
			{coe.map((item) => (
				<div
					key={item._id}
					className="my-2 w-full lg:m-3 lg:shadow-xl lg:border lg:rounded-lg">
					<div className="sm:border-2 flex bg-coe justify-center lg:flex-col lg:items-center lg:h-20 lg:rounded-t-lg customcoe:h-14">
						<p className="text-xs sm:text-sm lg:text-base">{item.category}</p>
						<p className="text-xs sm:text-sm lg:px-2">({item.descriptions})</p>
					</div>
					<div className="sm:border-2 flex justify-around lg:pt-3 lg:py-5">
						<div className="flex lg:flex-col lg:justify-center">
							<p className="text-xs lg:hidden">Change:</p>
							{changeSymbol(
								parseInt(item.current_premium),
								parseInt(item.prev_premium)
							)}
							<p
								className={`text-xs ${changeTextStyle(
									parseInt(item.current_premium),
									parseInt(item.prev_premium)
								)} w-14 text-left lg:text-center lg:text-xs`}>
								$
								{numberWithCommas(
									coeChanges(
										parseInt(item.current_premium),
										parseInt(item.prev_premium)
									)
								)}
							</p>
						</div>
						<div className="flex lg:flex-col">
							<p className="text-xs lg:hidden">Quota Premium:</p>
							<p className="text-xs lg:text-center lg:text-lg">
								${numberWithCommas(parseInt(item.current_premium))}
							</p>
							<p className="text-xs hidden lg:inline-flex text-center">
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
