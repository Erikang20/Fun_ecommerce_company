import type { Config } from "jest";

const config: Config = {
	verbose: true,
	collectCoverage: false,
	collectCoverageFrom: ["**/*.{ts,js,jsx}", "!**/node_modules/**"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;
