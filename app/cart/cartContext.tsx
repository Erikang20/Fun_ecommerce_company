"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProductType, CartItemType } from "../types/productTypes";

type CartContextType = {
	cartItems: CartItemType[];
	getItemQuantity: (product: ProductType) => void;
	addToCart: (product: ProductType) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItemType[]>([]);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.product.quantity_in_stock + quantity,
		0
	);

	const getItemQuantity = (product: ProductType) => {
		return (
			cartItems.find((item) => item.product.product_id === product.product_id)
				?.quantity || 0
		);
	};

	const addToCart = (product: ProductType) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find(
				(item) => item.product.product_id === product.product_id
			);

			if (existingItem) {
				return prevItems.map((item) =>
					item.product.product_id === item.product.product_id
						? { ...item, quantity: item.product.quantity_in_stock + 1 }
						: item
				);
			} else {
				return [...prevItems, { product, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (product: ProductType) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.product.product_id !== product.product_id)
		);
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, getItemQuantity }}>
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
