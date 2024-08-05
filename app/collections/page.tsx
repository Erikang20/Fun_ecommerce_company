import { getLocalData } from "../lib/collectionData";
import { MainBody } from "./mainBody";

type Product = {
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

async function Collections() {
	const data = await getLocalData();
	console.log(data);

	return (
		<main>
			Products:
			<div>
				{data.map((item: Product) => (
					<MainBody key={item.product_id} name={item.product_name} />
				))}
			</div>
		</main>
	);
}

export default Collections;
