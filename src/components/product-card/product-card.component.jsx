import { useContext } from 'react';
import './product-card.styles.scss';
import Button from './../button/button.component.jsx';
import { CartContext } from './../../context/cart.context.jsx';



const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const handleAddToCart = () => addItemToCart(product);

   return ( 
   <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={handleAddToCart}>Add to cart</Button>
    </div>)

};

export default ProductCard;