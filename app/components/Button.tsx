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
					<Link href="/category">Categories</Link>
					<Link href="/">Home</Link>
					<Link href="/collections">Products</Link>
					<Link href="/about">About us</Link>
					<div className={styles.shoppingCartContainer}>
						<Link href="/cart" className={styles.shoppingCart}>
							Cart
							<div className={styles.cartCounter}>3</div>
						</Link>
					</div>
				</nav>
			</aside>
		</>
	);
};
