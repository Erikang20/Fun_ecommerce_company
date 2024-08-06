"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DoggoIpsum from "@assets/doggoIpsum.svg";
import styles from "./styles.module.css";
import ShoppingCart from "@assets/shopping-cart.svg";

export const Header = () => {
	const handleClick = () => {
		console.log("click");
	};
	return (
		<div className={styles.header}>
			<div>
				{/* <Image src={DoggoIpsum} alt="" width={100} height={100} /> */}
				<h1>Doggo Ipsum</h1>
			</div>

			<nav className={styles.navContainer}>
				<Link href="/">Home</Link>
				<Link href="/collections">Products</Link>
				<Link href="/category">Categories</Link>
				<Link href="/cart">Shopping cart</Link>
				<Link href="/about">About us</Link>
				<div className={styles.shoppingCartContainer}>
					<button className={styles.shoppingCart} onClick={handleClick}>
						<Image src={ShoppingCart} alt={""} height={40} width={50} />
						<div className={styles.cartCounter}>3</div>
					</button>
				</div>
			</nav>
		</div>
	);
};
