import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import testingLibrary from "eslint-plugin-testing-library";
import prettierConfig from "eslint-config-prettier";

export default [
	pluginJs.configs.files,
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	pluginJs.configs.extends,
	{ extends: ["plugin:testing-library/react", "next", "next/typescript"] },
	pluginJs.configs.settings,
	{
		settings: {
			"testing-library/utils-module": "off",
			"testing-library/custom-renders": "off",
			"testing-library/custom-queries": "off",
		},
	},
	{
		languageOptions: { ecmaVersion: 5, sourceType: "script" },
		parser: babelParser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	{ parser: "@typescript-eslint/parser" },
	{ plugins: ["@typescript-eslint", "unused-imports"] },
	pluginJs.configs.recommended,
	{
		rules: {
			"unused-imports/no-unused-imports": "error",
		},
	},

	pluginReact.configs.ecmaVersion,

	...tseslint.configs.recommended,
	...testingLibrary.configs["flat/react"],
	prettierConfig,
	// pluginReact.configs.flat.recommended,
];
