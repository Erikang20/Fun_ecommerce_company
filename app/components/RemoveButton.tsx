import React from "react";
import styles from "./styles.module.css";

type RemoveButtonProps = {
	removeFromCart: () => void;
};

export const RemoveButton = ({ removeFromCart }: RemoveButtonProps) => {
	return (
		<button onClick={removeFromCart} className={styles.removeButton}>
			Remove
		</button>
	);
};
