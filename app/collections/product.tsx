"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { formatPrice } from "./actions";
import { ProductType } from "../types/productTypes";
import { useCart } from "../cart/cartContext";
import { RemoveButton } from "../components/RemoveButton";

type ProductListProps = {
	products: ProductType[];
};

export const Product = ({ products }: ProductListProps) => {
	const { addToCart, removeFromCart, cartItems } = useCart();

	return (
		<>
			{products?.map((product) => {
				const quantity =
					cartItems.find(
						(item) => item.product.product_id === product.product_id
					)?.quantity || 0;

				return (
					<div key={product.product_id} className={styles.productContainer}>
						<div className={styles.productHeader}>
							<h2>Name: {product.product_name}</h2>
							<div>
								<strong>price:</strong> {formatPrice(product.price)}
							</div>
						</div>

						<div className={styles.productImg}>
							<Image src={product.image_url} width={100} height={100} alt="" />
						</div>

						<div className={styles.productBody}>
							<div className={styles.productDetails}>
								<div>
									<strong>brand:</strong> {product.brand}
								</div>
								<div>
									<strong>color:</strong> {product.color}
								</div>
							</div>

							<div>{product.description}</div>
						</div>
						<div className={styles.extraInfo}>
							<div>
								<strong>Category:</strong> {product.category}
							</div>
							<div>
								<strong>inStock:</strong> {product.quantity_in_stock}
							</div>
							<div>
								<strong>size:</strong> {product.size}
							</div>
						</div>

						<div className={styles.addRemoveBtnsContainer}>
							<button
								className={styles.addButton}
								onClick={() => addToCart(product)}
							>
								Add to Cart
							</button>
							{quantity > 0 && (
								<>
									<div className={styles.quantity}>Quantity: {quantity}</div>
									<RemoveButton
										removeFromCart={() => removeFromCart(product)}
									/>
								</>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};
