import React from 'react';

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

const CardDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton> Go to Cart</CustomButton>
       
    </div>
)

export default CardDropdown;