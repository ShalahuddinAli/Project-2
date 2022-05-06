import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../utils';

const CoeData = ({ coe, auth }) => {
	const navigate = useNavigate();

	const handleNavigate = (event) => {
		event.preventDefault();
		navigate('/add-coe', { replace: true });
	};

	return (
		<div className="container flex justify-center mx-auto mt-20 md:mt-10">
			<div className="flex flex-col">
				<h2 className="text-3xl">COE Results</h2>
				<div className="w-full mt-6">
					<div className="border-b border-gray-200 shadow">
						<table className="divide-y divide-secondary">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-2 font-medium text-md text-gray-700 md:text-lg xl:text-2xl">
										Category
									</th>
									<th className="px-6 py-2 font-medium text-md text-gray-700 md:text-lg xl:text-2xl">
										Premium
									</th>
									<th className="px-6 py-2 font-medium text-md text-gray-700 md:text-lg xl:text-2xl">
										Edit
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-300">
								{coe &&
									coe.data.map((item) => (
										<tr className="whitespace-nowrap" key={item._id}>
											<td className="px-6 py-4 text-sm text-gray-700 md:text-md xl:text-lg">
												{item.category}
												<span className="hidden text-md md:inline xl:text-lg">
													({item.descriptions})
												</span>
											</td>
											<td className="px-6 py-4">
												<div className="text-sm text-gray-900 md:text-md xl:text-lg">
													${numberWithCommas(item.current_premium)}
												</div>
											</td>
											<td className="px-6 py-4">
												<a href="#">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-5 h-5 text-primary md:w-6 md:h6 xl:w-7 xl:h-7"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
                      2 0 112.828 
                      2.828L11.828 15H9v-2.828l8.586-8.586z"
														/>
													</svg>
												</a>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<button
					className="mt-8 text-gray-900 bg-secondary font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
					onClick={handleNavigate}>
					Add New Results
				</button>
			</div>
		</div>
	);
};

export default CoeData;
