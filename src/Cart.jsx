import React from 'react';
import './Cart.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
const Cart = () => {
    const [{basket},dispatch] = useStateValue();
    return(
        <div className="container">
            <div className="checkout">
            <div className="checkout_left">
                <div className="checkout_head">
                    <h2 className="checkout_title">
                        Shopping Cart
                    </h2>
                    <a href="#" className="deselect_link">
                        Deselect all items
                    </a>
                    <h2 className="checkout_price_title">
                        Price
                    </h2>
                </div>
                <div className="cart_list">
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            image = {item.image}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
        </div>
    )
}

export default Cart;