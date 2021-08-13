import CartActionType from './cart.types';

export const toggleCartHidden= ()=> ({
    type:CartActionType.TOFFLE_CART_HIDDEN
});

export const addItem=item =>({
    type:CartActionType.ADD_ITEM,
    paylod:item
});

export const removeItem= item=>({
    type:CartActionType.REMOVE_ITEM,
    paylod:item
});

export const clearItemFromCart= item =>({
    type:CartActionType.CLEAR_ITEM_FROM_CART,
    paylod:item
});

export const clearCart= ()=>({
    type: CartActionType.CLEAR_CART
})