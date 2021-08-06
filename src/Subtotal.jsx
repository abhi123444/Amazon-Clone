import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
const Subtotal = () => {
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();
    const hundlepush= (e) => {
        e.preventDefault();
        if(user)
            history.push("/payment");
        else
            history.push("/login");

    }
    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        Subtotal({basket.length} item): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"  />This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={hundlepush}>Proceed to checkou</button>
        </div>
    )
}

export default Subtotal;