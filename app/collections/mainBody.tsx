"use client";
import React from "react";
import styles from "./styles.module.css";

type MainBodyProps = {
	brand: string;
	category: string;
	color: string;
	description: string;
	img: HTMLImageElement;
	inStock: number;
	name: string;
	price: number;
	release_date: string;
	size: string;
};

export const MainBody = ({
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
}: MainBodyProps) => {
	return (
		<>
			<div className={styles.productContainer}>
				<div>Name: {name}</div>
				<div>Category: {category}</div>
				<div>brand: {brand}</div>
				<div>color: {color}</div>
				<div>description: {description}</div>
				<div>img: {img}</div>
				<div>inStock: {inStock}</div>
				<div>price: {price}</div>
				<div>release_date: {release_date}</div>
				<div>size: {size}</div>
			</div>
		</>
	);
};
