import { useNavigate } from 'react-router-dom';

import img from '../../assets/images/trafficCam.jpeg';
import { ChevronArrowRightIcon } from '../../assets/Svg';

const HomeTrafficCam = () => {
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-col justify-center items-center w-full mt-20"
			style={{
				background: `linear-gradient(to left, transparent, mistyrose), url(${img})`,
				height: '85vh',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<div className="w-9/12">
				<h2 className="inline bg-black p-0.5 text-slate-100 text-2xl md:text-3xl xl:text-4xl">
					To view
					<br />
					real-time footage of traffic <br />
					conditions at specific locations, click on the BUTTON below.
				</h2>
				<div className="w-11/12 flex justify-end mt-3 ">
					<button
						className="bg-gradient-to-tr from-primary via-primary to-secondary flex items-center p-2 rounded-lg hover:shadow-lg hover:opacity-90"
						onClick={(e) => {
							e.preventDefault();
							navigate('/traffic-cam', { replace: true });
						}}>
						<span>
							<ChevronArrowRightIcon className="w-4 h-4 text-slate-600 md:w-6 md:h-6 " />
						</span>
						<span>
							<ChevronArrowRightIcon className="w-4 h-4 text-slate-600 md:w-6 md:h-6" />
						</span>
						<span>
							<ChevronArrowRightIcon className="w-4 h-4 text-slate-600 md:w-6 md:h-6" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeTrafficCam;
