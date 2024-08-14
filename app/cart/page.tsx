import React from "react";
import { CartComponent } from "./CartComponent";
import { CartProvider, useCart } from "./cartContext";
import styles from "./styles.module.css";

const Cart = () => {
	// const { cartItems } = useCart();

	return (
		<CartProvider>
			<main className={styles.main}>
				<CartComponent
					cartItems={[]}
					removeFromCart={() => console.log("boop")}
				/>
			</main>
		</CartProvider>
	);
};

export default Cart;
