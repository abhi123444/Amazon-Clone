import React from 'react';
import './checkoutproduct.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';
import CurrencyFormat from "react-currency-format";
const CheckoutProduct = ({id,image,title,price,rating}) => {
    const [{basket},dispatch] = useStateValue();

    const Removefrombasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image} alt="" />

            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <CurrencyFormat
                    renderText={(value) => (
                        <h6 className="checkoutproduct_price">{value}</h6>
                    )}
                    decimalScale={2}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />  
                
                <div className="checkoutproduct_Rating">
                    {Array(rating).fill().map((_, i) =>( <StarIcon className="star_icon"/>))}
                </div>
                <a onClick={Removefrombasket}>Delete</a>
            </div>
        </div>
    )
}

export default CheckoutProduct;