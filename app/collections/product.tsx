"use client";
import React, { useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";
import { formatPrice } from "./actions";

type ProductProps = {
	product_id: number;
	name: string;
	category: string;
	brand: string;
	color: string;
	description: string;
	img: React.ReactNode;
	inStock: number;
	price: number;
	release_date: string;
	size: string;
	quantity_in_stock: number;
};

export const Product = ({
	product_id,
	name,
	category,
	brand,
	color,
	description,
	img,
	quantity_in_stock,
	price,
	release_date,
	size,
}: ProductProps) => {
	const [quantity, setQuantity] = useState(0);

	return (
		<>
			<div className={styles.productContainer} key={product_id}>
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
					<div>inStock: {quantity_in_stock}</div>
					<div>release_date: {release_date}</div>
					<div>size: {size}</div>
					<div className={styles.addRemoveBtnsContainer}>
						{quantity === 0 ? (
							<button className={styles.addButton}>Add to Cart</button>
						) : (
							<button>Remove</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
