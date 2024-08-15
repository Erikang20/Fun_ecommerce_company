"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProductType, CartItemType } from "../types/productTypes";

type CartContextType = {
	cartItems: CartItemType[];
	cartQuantity: number;
	addToCart: (product: ProductType) => void;
	removeFromCart: (product: ProductType) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const cartQuantity = cartItems.reduce(
		(acc, quantity) => acc + quantity.quantity,
		0
	);

	const addToCart = (product: ProductType) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(item) => item.product.product_id === product.product_id
			);

			if (existingItem) {
				return prevItems.map((item) =>
					item.product.product_id === item.product.product_id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevItems, { product, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (product: ProductType) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(item) => item.product.product_id === product.product_id
			);

			if (existingItem && existingItem.quantity > 1) {
				// Decrease quantity by 1
				return prevItems.map((item) =>
					item.product.product_id === product.product_id
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
			} else {
				// Remove item from cart when quantity is 1
				return prevItems.filter(
					(item) => item.product.product_id !== product.product_id
				);
			}
		});
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, cartQuantity, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
