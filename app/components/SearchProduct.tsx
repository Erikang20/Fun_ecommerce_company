// SearchProduct.tsx
"use client";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { DropDownButton } from "./DropDownButton";
import { Product } from "../collections/product";

type ProductType = {
	product_id: number;
	product_name: string;
	description: string;
	price: number;
	quantity_in_stock: number;
	category: string;
	brand: string;
	color: string;
	size: string;
	release_date: string;
	image_url: string;
};

type SearchProductProps = {
	products: ProductType[];
};

export const SearchProduct = ({ products }: SearchProductProps) => {
	const [querySearch, setQuerySearch] = useState("");

	const resultList = useMemo(() => {
		return products.filter((product) =>
			product.product_name.toLowerCase().includes(querySearch.toLowerCase())
		);
	}, [products, querySearch]);

	return (
		<div>
			<label>Search for your favorite product</label>
			<input
				onChange={(e) => setQuerySearch(e.target.value)}
				value={querySearch}
				type="search"
			/>
			<div className={styles.searchProductContainer}>
				{querySearch && (
					<>
						<h3>Results:</h3>
						{resultList.length > 0 ? (
							resultList.map((product) => (
								<Product
									key={product.product_id}
									name={product.product_name}
									category={product.category}
									brand={product.brand}
									color={product.color}
									description={product.description}
									img={<img src={product.image_url} width={100} height={100} />}
									inStock={product.quantity_in_stock}
									price={product.price}
									release_date={product.release_date}
									size={product.size}
								/>
							))
						) : (
							<div>No results found</div>
						)}
					</>
				)}
				{!querySearch && (
					<div className={styles.inventory}>
						{products.map((product) => (
							<div key={product.product_id}>
								<Product
									name={product.product_name}
									category={product.category}
									brand={product.brand}
									color={product.color}
									description={product.description}
									img={<img src={product.image_url} width={100} height={100} />}
									inStock={product.quantity_in_stock}
									price={product.price}
									release_date={product.release_date}
									size={product.size}
								/>
							</div>
						))}
					</div>
				)}
				<div className={styles.searchFilters}>
					<label>Sort by</label>
					<DropDownButton name1="TEST1" name2="TEST2" />
					<label>Filter by</label>
					<DropDownButton name1="Filter1" name2="Filter2" />
				</div>
			</div>
		</div>
	);
};
