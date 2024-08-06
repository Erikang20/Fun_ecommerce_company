"use client";
import React, { useState } from "react";

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

	return (
		<main>
			<h1>Checkout</h1>
			<div>{name}</div>
			<div>{price}</div>
			<div>{quantity}</div>
			<button onClick={addItems}>Add</button>
			<button onClick={removeItem}>Remove</button>
			<button>Checkout</button>
		</main>
	);
};

export default Cart;
