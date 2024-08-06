import Image from "next/image";
import { getLocalData } from "../lib/collectionData";
import { Product } from "./product";
import { SearchProduct } from "../components/SearchProduct";
import styles from "./styles.module.css";

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
			<div className={styles.inventory}>
				{data.map((item: Product) => (
					<Product
						key={item.product_id}
						name={item.product_name}
						category={item.category}
						brand={item.brand}
						color={item.color}
						description={item.description}
						img={
							<Image src={item.image_url} alt={""} width={100} height={100} />
						}
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
