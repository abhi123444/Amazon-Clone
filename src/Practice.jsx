import React from "react";
import {useStateValue} from "./StateProvider";


function Practice(id) {
    const [state, dispatch] = useStateValue();
    const addToBasket  = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id : id + 1
                }
            })
    }

    return(
    <div>
        <button onClick={addToBasket}>Add</button>
    </div>
    )
}
export default Practice;
