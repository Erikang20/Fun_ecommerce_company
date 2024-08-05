"use client";
import React from "react";

type MainBodyProps = {
	name: string;
};

export const MainBody = ({ name }: MainBodyProps) => {
	return (
		<>
			<div>The product Name: {name}</div>
		</>
	);
};
