export async function collectionData() {
	const response = await fetch("../test_data.json");
	const data = await response.json();
	return data;
}
