"use client";
import React from "react";
import styles from "./styles.module.css";
import { formatPrice } from "../collections/actions";
import { CartItemType } from "../types/productTypes";
import { useCart } from "./cartContext";

type CartProps = {
	cartItems: CartItemType[];
	removeFromCart: (product_id: string) => void;
};

export const CartComponent = () => {
	const { cartItems, cartQuantity } = useCart();
	const total = cartItems.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);

	return (
		<div className={styles.cartContainer}>
			<h1>Shopping Cart</h1>
			{cartQuantity === 0 ? (
				<div>Your cart is empty</div>
			) : (
				<div className={styles.cartItems}>
					{cartItems.map((item) => (
						<div key={item.product.product_id} className={styles.cartItem}>
							<div className={styles.cartItemDetails}>
								<h2>{item.product.product_name}</h2>
								<div>Price: {formatPrice(item.product.price)}</div>
								<div>Quantity: {item.quantity}</div>
							</div>
							<button>Remove</button>
						</div>
					))}
				</div>
			)}
			<div className={styles.cartTotal}>
				<h3>Total: {formatPrice(total)}</h3>
				<button>Checkout</button>
			</div>
		</div>
	);
};
