import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const subject = cart[i];
        total = total + Number(subject.price);
        
    }
    return (
        <div className="cart-part">
            <h2> Order Summary</h2>
            <h3>Items ordered: {cart.length}</h3>
                 <h4>Price: ${total}</h4>
        </div>
    );
};

export default Cart;