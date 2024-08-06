"use client";
import React from "react";
import styles from "./styles.module.css";
import { formatPrice } from "./actions";

type ProductProps = {
	brand: string;
	category: string;
	color: string;
	description: string;
	img: any;
	inStock: number;
	name: string;
	price: number;
	release_date: string;
	size: string;
};

export const Product = ({
	brand,
	category,
	color,
	description,
	img,
	inStock,
	name,
	price,
	release_date,
	size,
}: ProductProps) => {
	const quantity = 1;

	return (
		<div className={styles.productContainer}>
			<div className={styles.productHeader}>
				<h2>{name}</h2>
				<div>Category: {category}</div>
				<div>price: {formatPrice(price)}</div>
			</div>

			<div className={styles.productImg}>{img}</div>

			<div className={styles.productBody}>
				<div className={styles.productDetails}>
					<div>brand: {brand}</div>
					<div>color: {color}</div>
				</div>

				<div>{description}</div>
			</div>
			<div className={styles.extraInfo}>
				<div>inStock: {inStock}</div>
				<div>release_date: {release_date}</div>
				<div>size: {size}</div>
			</div>
			<div className={styles.addRemoveBtnsContainer}>
				{quantity === 0 ? (
					<button>Add to Cart</button>
				) : (
					<button>Remove</button>
				)}
			</div>
		</div>
	);
};
