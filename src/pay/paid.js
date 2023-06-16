import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

function Paid(){
    const {getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return(
        <div>
            <h1>${totalAmount}</h1>
            Your payment is successful
        </div>
    )
}

export default Paid;