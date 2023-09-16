/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray-20": "#F8F4EB",
				"gray-50": "#EFE6E6",
				"gray-100": "#C0AAAA",
				"gray-500": "#5E0000",
				"primary-100": "#C0E2F3",
				"primary-300": "#6BA3D4",
				"primary-500": "#007ACC",
				"secondary-400": "#58C3FF",
				"secondary-500": "#65AEDD",
			},
		},
	},
	plugins: [],
}
