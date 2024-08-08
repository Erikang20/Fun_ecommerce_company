import React from "react";
import { Product } from "../collections/product";
import styles from "./styles.module.css";
import { ProductType } from "../types/productTypes";

type ProductListProps = {
	products: ProductType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<div className={styles.productList}>
			<Product products={products} />
		</div>
	);
};
