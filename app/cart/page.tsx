import React from "react";
import { CartComponent } from "./CartComponent";
import styles from "./styles.module.css";

const Cart = () => {
	return (
		<main className={styles.main}>
			<CartComponent />
		</main>
	);
};

export default Cart;
