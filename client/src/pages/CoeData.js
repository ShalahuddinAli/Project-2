const CoeData = ({ coe, auth }) => {
	console.log(coe);
	return (
		<div className="container flex justify-center mx-auto mt-20">
			<div className="flex flex-col">
				<div className="w-full">
					<div className="border-b border-gray-200 shadow">
						<table className="divide-y divide-secondary ">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-2 text-xl text-gray-500">Category</th>
									<th className="px-6 py-2 text-xl text-gray-500">Premium</th>
									<th className="px-6 py-2 text-xl text-gray-500">Edit</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-300">
								<tr className="whitespace-nowrap">
									<td className="px-6 py-4 text-sm text-gray-500">1</td>
									<td className="px-6 py-4">
										<div className="text-sm text-gray-900">Adam joe</div>
									</td>

									<td className="px-6 py-4">
										<a href="#">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 text-primary"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
                      2 0 112.828 
                      2.828L11.828 15H9v-2.828l8.586-8.586z"
												/>
											</svg>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoeData;
