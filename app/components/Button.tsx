import Link from "next/link";
import styles from "./styles.module.css";

export const ButtonMenu = () => {
	return (
		<>
			<label className={styles.hamburgerBtn}>
				<input type="checkbox" />
			</label>
			<aside className={styles.sidebarHamburger}>
				<nav className={styles.navContainer}>
					<Link href="/">Home</Link>
					<Link href="/collections">Products</Link>
					<Link href="/about">About us</Link>
					<Link href="/cart" className={styles.shoppingCart}>
						Cart
					</Link>
				</nav>
			</aside>
		</>
	);
};
