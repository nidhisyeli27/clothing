import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux' 
import CartIcon from '../cart-icon/cart-icon.component'
import CardDropdown from '../card-dropdown/card-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import {signOutStart} from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOutStart})=> (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="">CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={ signOutStart}> SIGN OUT</div>
                :
                <Link className='option' to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden?null:<CardDropdown/>
        }
    </div>
)
const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps= dispatch =>({
    signOutStart:()=> dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);