"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { ProductList } from "../collections/ProductList";
import SearchIcon from "@assets/search.svg";
import { ProductType } from "../types/productTypes";

type SearchProductProps = {
	products: ProductType[];
};

export const SearchProduct = ({ products }: SearchProductProps) => {
	const [querySearch, setQuerySearch] = useState("");
	const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

	const resultList = useMemo(() => {
		if (filteredCategory) {
			return products.filter(
				(product) =>
					product.category === filteredCategory &&
					product.product_name.toLowerCase().includes(querySearch.toLowerCase())
			);
		}
		return products.filter((product) =>
			product.product_name.toLowerCase().includes(querySearch.toLowerCase())
		);
	}, [products, querySearch, filteredCategory]);

	const itemsCategories = [...new Set(products.map((item) => item.category))];

	const handleFilter = (category: string) => {
		setFilteredCategory(category);
	};

	return (
		<>
			<div className={styles.searchAndFilterContainer}>
				<div className={styles.searchElements}>
					<Image src={SearchIcon} alt={""} height={30} width={30} />
					<input
						className={styles.searchInput}
						onChange={(e) => setQuerySearch(e.target.value)}
						value={querySearch}
						type="search"
					/>
				</div>

				<div className={styles.searchFilters}>
					<label>Filters </label>
					{itemsCategories.map((item, index) => (
						<div key={index} className={styles.filterButtonsContainer}>
							<button
								className={styles.filterButtons}
								onClick={() => handleFilter(item)}
							>
								{item}
							</button>
						</div>
					))}
					<button
						className={styles.filterButtons}
						onClick={() => setFilteredCategory(null)}
					>
						Clear Filters
					</button>
				</div>
			</div>

			<div className={styles.searchProductContainer}>
				<div className={styles.searchResult}>
					{resultList.length > 0 ? (
						<ProductList products={resultList} />
					) : (
						<div>No results found</div>
					)}
				</div>
			</div>
		</>
	);
};
