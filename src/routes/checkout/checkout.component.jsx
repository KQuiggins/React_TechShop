import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'


import './checkout.styles.scss'

const CheckOut = () => {

    const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <>
    <div>CheckOut</div>

    <div>
        {
            cartItems.map((cartItem) => {
                const { id, name, quantity } = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span>deccrement</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        
                    </div>
                )
            })
        }
            

            
        
    </div>
    </>
  )
}

export default CheckOut