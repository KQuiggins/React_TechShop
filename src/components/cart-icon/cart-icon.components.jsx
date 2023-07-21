import { useContext } from "react";

import "./cart-icon.styles.scss";
import SvgComponent from "./../Shopping-Icon/shopping-icon.component.jsx";

import {CartContext} from './../../context/cart.context.jsx';


const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<div className="cart-icon-container" onClick={toggleCart}>
			<SvgComponent className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;

