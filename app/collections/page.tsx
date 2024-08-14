import { getLocalData } from "../lib/collectionData";
import { SearchProduct } from "../components/SearchProduct";
import { CartProvider } from "../cart/cartContext";
import styles from "./styles.module.css";

async function Collections() {
	const data = await getLocalData();

	return (
		<CartProvider>
			<main className={styles.main}>
				<h1 className={styles.productHeading}>Products:</h1>
				<SearchProduct products={data} />
			</main>
		</CartProvider>
	);
}

export default Collections;
