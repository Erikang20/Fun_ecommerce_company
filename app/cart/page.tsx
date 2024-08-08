"use client";
import React from "react";
import { CartComponent } from "./CartComponent";
import { CartProvider, useCart } from "./cartContext";

const Cart = () => {
	const { cartItems } = useCart();
	const removeFromCart = () => null;

	return (
		<CartProvider>
			<main>
				<CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />
			</main>
		</CartProvider>
	);
};

export default Cart;
