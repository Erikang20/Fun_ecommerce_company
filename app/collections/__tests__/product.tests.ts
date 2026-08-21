import React from "react";
import { render, screen } from "@testing-library/react";
import { Product } from "../product";

describe("Products", () => {
	it.skip("should render a search input element", () => {
		render(<Product />);
		expect(screen.getByTestId("custom-element")).toBeVisible();
		screen.debug();
	});
});
