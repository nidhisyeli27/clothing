import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.action.js'

const CartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon'onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <spam className='item-count'>0</spam>
    </div>

)

const mapDispatchToProps= dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);