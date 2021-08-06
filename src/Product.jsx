import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
const Product = (props) => {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        })
    }
    const ratings= props.rating;
    return(
        <div className="product">
           <div className="product_info">
                <p className ="title">{props.title}</p>
                <div className="product_Rating">
                    {Array(ratings).fill().map((_, i) =>( <StarIcon className="star_icon"/>))}
                </div>
                 <p className="product_price">
                    <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                     <strong className="product_price">{value}</strong>
                                    </>
                                )}
                                decimalScale={2}
                                value={props.price}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                 </p>
                
            </div>
            <img src={props.image} alt="" />
            <button onClick={addToBasket} className="add_cart">Add to cart</button>
        </div>
    )
}

export default Product;