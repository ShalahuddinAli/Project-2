import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="bg-gradient-to-tr from-primary via-primary to-secondary flex h-12 md:h-16 justify-between items-center">
				<button className="ml-2 px-2 py-1 md:ml-5 bg-primary text-xs md:text-base border-black rounded-md md:p-2 hover:shadow">
					Subscribe
				</button>
				<h1 className="text-xl font-cinzel align-text-bottom md:text-2xl">
					Parking Hunter
				</h1>
				<button
					href="/admin"
					className="mr-2 text-xs border-[0.5px] px-2 py-1 border-black rounded-md cursor-pointer hover:shadow md:px-3 md:mr-5 md:text-base active:bg-primary ">
					Admin
				</button>
			</div>
			<nav className="flex justify-center bg-secondary">
				<Link
					to="/"
					className="m-0.5 text-xs hover:underline md:text-base md:m-2">
					Home
				</Link>
				<Link
					to="/about"
					className="m-0.5 text-xs hover:underline md:text-base md:m-2">
					About
				</Link>
				<Link
					to="/contact"
					className="m-0.5 text-xs hover:underline md:text-base md:m-2">
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
