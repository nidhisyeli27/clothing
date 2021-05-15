import CartActionType from './cart.types';

export const toggleCartHidden= ()=> ({
    type:CartActionType.TOFFLE_CART_HIDDEN
});

export const addItem=item =>({
    type:CartActionType.ADD_ITEM,
    paylod:item
});