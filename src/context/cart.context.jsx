import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
	// find if cartItems contains productToAdd

	// If found increase quantity by 1

	// Return new array with modified cartItems/ new cartItems
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { isCartOpen, setIsCartOpen };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

/*
product
{
	id,
	name,
	price,
	imageUrl
}

cartItem
{
	id,
	name,
	price,
	imageUrl,
	quantity


*/
