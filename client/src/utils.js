export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const numberWithCommas = (num) => {
	if (num === 0) return 'No Change';
	return Math.abs(num)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
