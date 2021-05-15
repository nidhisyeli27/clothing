import  CartActionType  from '../cart/cart.types'
import {addItemToCart}from './cart.utils'
const INITIAL_STATE={
    hidden:true,
    cartItemm:[]
}

const cartReducer =(state= INITIAL_STATE, action)=>{
    switch(action.type){
        case CartActionType.TOFFLE_CART_HIDDEN:
            return{ 
                ...state,
                hidden:!state.hidden
            }
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItemm:addItemToCart(state.cartItemm, action.paylod)
            }
            
        default:return state;
    }
}

export default cartReducer