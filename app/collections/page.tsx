import Image from "next/image";
import { getLocalData } from "../lib/collectionData";
import { Product } from "./product";
import { SearchProduct } from "../components/SearchProduct";

import styles from "./styles.module.css";

async function Collections() {
	const data = await getLocalData();

	return (
		<main>
			<h1>Products:</h1>
			<SearchProduct products={data} />
		</main>
	);
}

export default Collections;
