import { getLocalData } from "../lib/collectionData";
import { SearchProduct } from "../components/SearchProduct";
import { CartProvider } from "../cart/cartContext";

async function Collections() {
	const data = await getLocalData();

	return (
		<CartProvider>
			<main>
				<h1>Products:</h1>
				<SearchProduct products={data} />
			</main>
		</CartProvider>
	);
}

export default Collections;
