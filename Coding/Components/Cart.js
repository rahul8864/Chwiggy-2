import React from 'react';
import { useSelector } from "react-redux";
import FoodCart from './FoodCart';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)

    return (
        <div className='container-cart'>
            {cartItems.length === 0 ? (
                <div className='empty-cart'>
                    Your cart is empty.
                </div>
            ) : (
                <div className='cart-items'>
                    {cartItems.map((item) =>
                        <FoodCart key={item.id} {...item} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;
