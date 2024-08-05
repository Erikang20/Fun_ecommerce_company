import React from "react";

const CollectionDetails = ({ params }: { params: { product_id: string } }) => {
	return (
		<main>
			<h1>product details: {params.product_id}</h1>
		</main>
	);
};

export default CollectionDetails;
