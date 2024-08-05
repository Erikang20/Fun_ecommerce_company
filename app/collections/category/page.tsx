import React from "react";

const Category = ({ params }: { params: { product_id: string } }) => {
	return (
		<main>
			<h1>Sort by Category {params.product_id}</h1>
		</main>
	);
};

export default Category;
