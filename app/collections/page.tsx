import { collectionData } from "./lib/collectionData";

export default async function getStaticProps() {
	const data = await collectionData();
	console.log(data);
	// <main>
	// 	<h1>Collections: {data}</h1>
	// </main>

	return { props: { data } };
}

// export async function getStaticProps() {
//   // Instead of fetching your `/api` route you can call the same
//   // function directly in `getStaticProps`
//   const posts = await loadPosts()

//   // Props returned will be passed to the page component
//   return { props: { posts } }
// }
