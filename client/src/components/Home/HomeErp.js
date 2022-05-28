import { Link } from 'react-router-dom';

import img from '../../assets/images/erp.jpeg';
import { ArrowRightIcon } from '../../assets/Svg';

const HomeErp = () => {
	return (
		<div className=" w-full flex flex-row m-20 p-4" style={{ height: '65vh' }}>
			<div
				className="flex h-auto w-full bg-cover"
				style={{
					background: `radial-gradient(circle at center, transparent, mistyrose), url(${img})`,
					borderRadius: '50%',
				}}></div>

			<div className="h-full w-full ml-6 px-5 flex flex-col justify-center">
				<div className="mb-5">
					<h2 className="text-2xl md:text-3xl xl:text-4xl">
						Electronic Road Pricing(ERP)
					</h2>
				</div>
				<div>
					<p className="text-lg mb-3 md:text-xl xl:text-2xl">
						Check the Electronic Road Pricing (ERP) rates for different roads at
						specific times of the day.
					</p>
					<Link
						to="/erp"
						className="inline-flex text-lg md:text-xl xl:text-2xl text-blue-600 tracking-tighter w-auto">
						<span>Find out more</span>
						<ArrowRightIcon className="h-6 w-6 mt-1 p-0 m-0" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeErp;
