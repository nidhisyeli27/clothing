import ShopActionTypes from './shop.type'

export const fetchCollectionsStart =()=>({
    type : ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap =>({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure= erroeMessage=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: erroeMessage
})
