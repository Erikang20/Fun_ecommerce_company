"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import ShoppingCart from "@assets/shopping-cart.svg";
import SearchIcon from "@assets/search.svg";
import HomeIcon from "@assets/home.svg";
import AboutUs from "@assets/about-us.svg";

export const Header = () => {
	const handleClick = () => {
		console.log("click");
	};

	return (
		<div className={styles.header}>
			<div>
				<h1>Doggo Ipsum</h1>
			</div>

			<nav className={styles.navContainer}>
				<Link href="/category">Categories</Link>
				<Link href="/">
					<Image src={HomeIcon} alt={""} height={40} width={50} />
				</Link>
				<Link href="/collections">
					<Image src={SearchIcon} alt={""} height={40} width={50} />
				</Link>
				<Link href="/about">
					<Image src={AboutUs} alt={""} height={40} width={50} />
				</Link>
				<div className={styles.shoppingCartContainer}>
					<Link
						href="/cart"
						className={styles.shoppingCart}
						onClick={handleClick}
					>
						<Image src={ShoppingCart} alt={""} height={40} width={50} />
						<div className={styles.cartCounter}>3</div>
					</Link>
				</div>
			</nav>
		</div>
	);
};
