import React from "react";
import styles from "./styles.module.css";
import { formatPrice } from "../collections/actions";
import { CartItemType } from "../types/productTypes";
import { CartProvider, useCart } from "./cartContext";

type CartProps = {
	cartItems: CartItemType[];
	removeFromCart: (product_id: string) => void;
};

export const CartComponent = ({ cartItems, removeFromCart }: CartProps) => {
	const total = cartItems.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);

	return (
		<CartProvider>
			<div className={styles.cartContainer}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
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
								<button onClick={() => removeFromCart(item.product.product_id)}>
									Remove
								</button>
							</div>
						))}
					</div>
				)}
				<div className={styles.cartTotal}>
					<h3>Total: {formatPrice(total)}</h3>
					<button>Checkout</button>
				</div>
			</div>
		</CartProvider>
	);
};
