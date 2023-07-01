import Button from '../button/button.component';


import './cart-dropdown.styles.scss';
import CartItem from './../cart-item/cart-item.component.jsx';

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {[].map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;