import React from "react";
import Image from "next/image";
import { Product } from "../collections/product";
import styles from "./styles.module.css";
import { ProductType } from "../types/productTypes";

type ProductListProps = {
	products: ProductType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<div className={styles.productList}>
			{products.map((product) => (
				<div key={product.product_id} className={styles.productContainer}>
					<Product
						product_id={product.product_id}
						name={product.product_name}
						category={product.category}
						brand={product.brand}
						color={product.color}
						description={product.description}
						img={
							<Image src={product.image_url} width={100} height={100} alt="" />
						}
						inStock={product.quantity_in_stock}
						price={product.price}
						release_date={product.release_date}
						size={product.size}
						quantity_in_stock={product.quantity_in_stock}
					/>
				</div>
			))}
		</div>
	);
};
