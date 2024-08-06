"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

type Checkout = {
	name: string;
	price: number;
	quantity: number;
};

const Cart = ({ name, price, quantity }: Checkout) => {
	const [itemsInCart, setItemsInCart] = useState(0);

	const addItems = () => {
		setItemsInCart(itemsInCart + 1);
		console.log("add", itemsInCart);
	};
	const removeItem = () => {
		setItemsInCart(itemsInCart - 1);
		console.log("Remove", itemsInCart);
	};

	const addRemoveBtns = () => {
		return (
			<div className={styles.addRemoveBtns}>
				<div>
					<button>-</button>
					<div>
						<span>{quantity}</span>
						In Cart
					</div>
					<button>+</button>
				</div>
				<button>Remove</button>
			</div>
		);
	};

	return (
		<>
			<h1>Shopping Cart</h1>
			<div className={styles.checkoutList}>
				<div>name: {name}</div>
				<div>price{price}</div>
				<div>quantity{quantity}</div>
				<div>Taxes</div>
				<div>total Price</div>
				<button onClick={addItems}>Add</button>
				<button onClick={removeItem}>Remove</button>
			</div>

			<button>Checkout</button>
		</>
	);
};

export default Cart;
