import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect'

import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.action.js'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div className='cart-icon'onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <spam className='item-count'>{itemCount}</spam>
    </div>

)

const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps= dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);