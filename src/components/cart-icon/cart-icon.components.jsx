

import './cart-icon.styles.scss';
import SvgComponent from './../Shopping-Icon/shopping-icon.component.jsx';



const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <SvgComponent className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;