module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^@fontsource/raleway/(.*)$': 'identity-obj-proxy',
		'^@fontsource/open-sans/(.*)$': 'identity-obj-proxy',
	},
};

export {};
