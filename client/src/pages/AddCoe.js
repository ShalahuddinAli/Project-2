import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../img/firdouss-ross-pFJtmoDMSAo-unsplash.jpg';
import { months } from '../utils';
const AddCoe = ({ coe }) => {
	const navigate = useNavigate();

	const [period, setPeriod] = useState({ year: '', month: '', quarter: '' });
	const [coeData, setCoeData] = useState({
		'Cat A': '',
		'Cat B': '',
		'Cat C': '',
		'Cat D': '',
		'Cat E': '',
	});

	const { year, month, quarter } = period;

	const handlePeriod = (event) => {
		setPeriod((prev) => {
			return {
				...prev,
				[event.target.id]: event.target.value,
			};
		});
	};

	const handleChange = (event) => {
		setCoeData((prev) => {
			return { ...prev, [event.target.id]: event.target.value };
		});
	};
	console.log(year);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const reqData = { year, month, quarter, data: coeData };
		const res = await axios.post('/coe/addCoe', reqData, {
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.getItem('token'),
			},
		});
		console.log(res);
	};

	return (
		<div
			className=""
			style={{
				backgroundImage: `url(${bgImage})`,
			}}>
			<div className="bg-gray-100 mx-auto max-w-5xl py-8 px-12 lg:px-24 shadow-xl mb-24">
				<form onSubmit={handleSubmit}>
					<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
						<div className="-mx-3 flex mb-0">
							<div className="w-1/2 px-3 mb-1 md:mb-0">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="year">
									Year*
								</label>
								<div>
									<select
										className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-1 pr-8 mb-3 rounded md:px-3"
										id="year"
										onChange={handlePeriod}
										value={year}>
										<option>{new Date().getFullYear()}</option>
										<option>{new Date().getFullYear() + 1}</option>
									</select>
								</div>
							</div>
							<div className="w-1/2 px-3 mb-1 md:mb-0">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2 "
									htmlFor="month">
									Month*
								</label>
								<div>
									<select
										className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-1 pr-8 mb-3 rounded md:px-3"
										id="month"
										onChange={handlePeriod}
										value={month}>
										{months.map((month, index) => (
											<option key={index} value={index + 1}>
												{month}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className="-mx-3 flex mb-6 justify-center">
							<div className="w-2/3 px-3 mb-1 md:mb-0">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="quarter">
									Quarter*
								</label>
								<div>
									<select
										className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
										id="quarter"
										onChange={handlePeriod}
										value={quarter}>
										<option value={1}>Q1</option>
										<option value={2}>Q2</option>
									</select>
								</div>
							</div>
						</div>
						<div className="-mx-3 mb-0 md:flex">
							<div className="md:w-1/2 px-3 ">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="Cat A">
									Category A*
								</label>
								<input
									className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-0 md:mb-3"
									id="Cat A"
									type="text"
									placeholder="$"
									onChange={handleChange}
									value={coeData['Cat A']}
								/>
							</div>
							<div className="md:w-1/2 px-3 ">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="Cat B">
									Category B*
								</label>
								<input
									className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-0 md:mb-3"
									id="Cat B"
									type="text"
									placeholder="$"
									onChange={handleChange}
									value={coeData['Cat B']}
								/>
							</div>
						</div>
						<div className="-mx-3 md:flex mb-2     ">
							<div className="md:w-1/2 px-3">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="Cat C">
									Category C*
								</label>
								<input
									className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-0 md:mb-3"
									id="Cat C"
									type="text"
									placeholder="$"
									onChange={handleChange}
									value={coeData['Cat C']}
								/>
							</div>
							<div className="md:w-1/2 px-3">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="Cat D">
									Category D*
								</label>
								<input
									className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-0 md:mb-3"
									id="Cat D"
									type="text"
									placeholder="$"
									onChange={handleChange}
									value={coeData['Cat D']}
								/>
							</div>
							<div className="md:w-1/2 px-3">
								<label
									className="uppercase tracking-wide text-black text-xs font-bold mb-2"
									htmlFor="Cat E">
									Category E*
								</label>
								<input
									className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-0 md:mb-3"
									id="Cat E"
									type="text"
									placeholder="$"
									onChange={handleChange}
									value={coeData['Cat E']}
								/>
							</div>
						</div>
						<div className="-mx-3 md:flex mt-2">
							<div className="flex justify-center md:w-full px-3">
								<button className="md:w-full text-gray-900 bg-secondary font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCoe;
