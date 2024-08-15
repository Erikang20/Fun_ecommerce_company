"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { formatPrice } from "../collections/actions";
import { useCart } from "./cartContext";
import ShoppingCart from "@assets/shopping-cart.svg";

export const CartComponent = () => {
	const { cartItems, cartQuantity, removeFromCart } = useCart();
	const total = cartItems.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);

	return (
		<div className={styles.cartContainer}>
			<h1>Shopping Cart</h1>
			{cartQuantity === 0 ? (
				<>
					<Image
						src={ShoppingCart}
						alt=""
						width={300}
						height={300}
						className={styles.shoppingCart}
					/>
					<h2 className={styles.emptyState}>Your cart is currently empty!</h2>
				</>
			) : (
				<div className={styles.cartItems}>
					{cartItems.map((item) => (
						<>
							<div className={styles.checkoutItemContainer}>
								<div key={item.product.product_id} className={styles.cartItem}>
									<div className={styles.cartItemDetails}>
										<h2>{item.product.product_name}</h2>
										<div>Price: {formatPrice(item.product.price)}</div>
										<div>Quantity: {item.quantity}</div>
									</div>
								</div>

								<button
									onClick={() => removeFromCart(item.product)}
									className={styles.removeButton}
								>
									Remove
								</button>
							</div>
						</>
					))}
				</div>
			)}
			<div className={styles.cartTotal}>
				<h3>Total: {formatPrice(total)}</h3>
				<button className={styles.cartButton}>Checkout</button>
			</div>
		</div>
	);
};
