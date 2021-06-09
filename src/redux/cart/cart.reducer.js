import  CartActionType  from '../cart/cart.types'
import {addItemToCart, removeItemFromCart}from './cart.utils'
const INTIAL_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer =(state= INTIAL_STATE, action)=>{
    switch(action.type){
        case CartActionType.TOFFLE_CART_HIDDEN:
            return{ 
                ...state,
                hidden:!state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.paylod)
            }
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.paylod)
            }
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id!== action.paylod.id )
            }    
        default:return state;
    }
}

export default cartReducer