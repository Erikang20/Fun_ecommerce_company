import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const customJestConfig: Config = {
	verbose: true,
	collectCoverage: false,
	collectCoverageFrom: ["**/*.{ts,js,jsx}", "!**/node_modules/**"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./jest.setup.ts"],
};

module.exports = createJestConfig(customJestConfig);
