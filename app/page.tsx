import styles from "./page.module.css";
import Image from "next/image";
import DoggoIpsum from "@assets/doggoIpsum.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<h2>Welcome to Doggo Ipsum</h2>
			<Image src={DoggoIpsum} alt="" width={500} height={500} />
			<span>Whatever you are looking for, we got it!</span>
		</main>
	);
}
