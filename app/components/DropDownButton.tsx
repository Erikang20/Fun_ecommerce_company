import React from "react";

type DropDownButtonProps = {
	name1: string;
	name2: string;
};

export const DropDownButton = ({ name1, name2 }: DropDownButtonProps) => {
	return (
		<>
			<select>
				<option value={name1}>{name1}</option>
				<option value={name2}>{name2}</option>
			</select>
		</>
	);
};
