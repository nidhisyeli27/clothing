import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage =({cartItems,total}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
            <spam>Product</spam>
            </div>
            <div className='header-block'>
            <spam>Description</spam>
            </div>
            <div className='header-block'>
            <spam>Quantity</spam>
            </div>
            <div className='header-block'>
            <spam>Price</spam>
            </div>
            <div className='header-block'>
            <spam>Remove</spam>
            </div>
        </div>  
        {
            cartItems.map(cartItem=>
                (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            )
        }
        <div className='total'>
        <spam>TOTAL:${total}</spam>
        </div>  
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);