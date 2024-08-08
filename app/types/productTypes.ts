export type ProductType = {
	product_id: string;
	product_name: string;
	description: string;
	price: number;
	quantity_in_stock: number;
	category: string;
	brand: string;
	color: string;
	size: string;
	release_date: string;
	image_url: any;
};

export type CartItemType = {
	product: ProductType;
	quantity: number;
};
