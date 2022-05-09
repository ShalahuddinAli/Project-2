import HomeErp from '../components/Home/HomeErp';
import CoeInfo from '../components/Home/CoeInfo';
import SearchBar from '../components/Search/SearchBar';
import HomeTrafficCam from '../components/Home/HomeTrafficCam';
import IncidentsTicker from '../components/Home/IncidentsTicker';

import img from '../assets/images/pexels-photo-385997.jpeg';

const Home = ({ coe }) => {
	return (
		<div className="h-full w-full flex flex-col items-center">
			<IncidentsTicker />

			{coe && <CoeInfo coe={coe} />}

			<div
				className="h-[32rem] w-10/12 flex justify-center items-center my-4 border border-black "
				style={{
					backgroundImage: `url(${img})`,
					backgroundPosition: 'center',
				}}>
				<SearchBar />
			</div>

			<HomeTrafficCam />

			<HomeErp />
		</div>
	);
};

export default Home;
