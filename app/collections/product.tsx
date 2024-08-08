"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { formatPrice } from "./actions";
import { ProductType, CartItemType } from "../types/productTypes";
import { useCart } from "../cart/cartContext";

type ProductListProps = {
	products: ProductType[];
};

export const Product = ({ products }: ProductListProps) => {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);
	const { addToCart, getItemQuantity } = useCart();

	// const handleRemoveItem = (product: ProductType) => {
	// 	setCartItems((prevItems) => {
	// 		const existingItem = prevItems.find(
	// 			(item) => item.product.product_id === product.product_id
	// 		);
	// 		if (existingItem && existingItem.quantity > 1) {
	// 			return prevItems.map((item) =>
	// 				item.product.product_id === product.product_id
	// 					? { ...item, quantity: item.quantity - 1 }
	// 					: item
	// 			);
	// 		} else {
	// 			return prevItems.filter(
	// 				(item) => item.product.product_id !== product.product_id
	// 			);
	// 		}
	// 	});
	// };

	return (
		<>
			{products?.map((product) => {
				const quantity = getItemQuantity(product);
				return (
					<div key={product.product_id} className={styles.productContainer}>
						<div className={styles.productHeader}>
							<h2>Name: {product.product_name}</h2>
							<div>Category: {product.category}</div>
							<div>price: {formatPrice(product.price)}</div>
						</div>

						<div className={styles.productImg}>
							<Image src={product.image_url} width={100} height={100} alt="" />
						</div>

						<div className={styles.productBody}>
							<div className={styles.productDetails}>
								<div>brand: {product.brand}</div>
								<div>color: {product.color}</div>
							</div>

							<div>{product.description}</div>
						</div>
						<div className={styles.extraInfo}>
							<div>inStock: {product.quantity_in_stock}</div>
							<div>release_date: {product.release_date}</div>
							<div>size: {product.size}</div>
							<div className={styles.addRemoveBtnsContainer}>
								<button
									className={styles.addButton}
									onClick={() => addToCart(product)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
