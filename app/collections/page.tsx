import Image from "next/image";
import { getLocalData } from "../lib/collectionData";
import { MainBody } from "./mainBody";
import { SearchProduct } from "../components/SearchProduct";
import styles from "./page.module.css";

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

	return (
		<main>
			<h1>Products:</h1>
			<SearchProduct />
			<div>
				{data.map((item: Product) => (
					<MainBody
						key={item.product_id}
						name={item.product_name}
						category={item.category}
						brand={item.brand}
						color={item.color}
						description={item.description}
						img={<Image src={item.image_url} alt={""} width={10} height={20} />}
						inStock={item.quantity_in_stock}
						price={item.price}
						release_date={item.release_date}
						size={item.size}
					/>
				))}
			</div>
		</main>
	);
}

export default Collections;
