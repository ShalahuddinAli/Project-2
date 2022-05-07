import { Link } from 'react-router-dom';

import { GitHubIcon, LinkedInIcon } from '../assets/Svg';

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center items-center align-middle bg-hot py-2">
			<h6 className="text-md font-cinzel m-0 p-0 md:text-xl md:mt-2 ">
				Parking Hunter
			</h6>
			<div className="flex flex-col">
				<div className="flex">
					<span className="text-center align-middle mx-1 text-xs">
						Copyright© {new Date().getFullYear()}
					</span>
					<Link
						to="/contact"
						className="text-center align-middle mx-1 text-xs hover:underline">
						Shalahuddin Ali
					</Link>
				</div>
				<div className="flex justify-center">
					<a href="https://github.com/shalahuddinali" className="m-1">
						<GitHubIcon />
					</a>
					<a
						href="https://www.linkedin.com/in/shalahuddin-ali/"
						className="m-1">
						<LinkedInIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
