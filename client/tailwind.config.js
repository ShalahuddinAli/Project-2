module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ['Cinzel'],
			},
			colors: {
				primary: '#ED715D',
				secondary: '#EDB95D',
				coe: '#EDB95D',
				hot: '#E8492F',
			},
		},

		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
			customcoe: '1066px',
		},
	},
	plugins: [],
};
