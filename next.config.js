/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "dummyimage.com",
			},
		],
	},
	experimental: {
		forceSwcTransforms: true,
	},
};

module.exports = nextConfig;
