import fsPromises from "fs/promises";
import path from "path";

export async function getLocalData() {
	const filePath = path.join(process.cwd(), "/app/lib/test_data_large.json");
	const data = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(data.toString());

	return objectData;
}
