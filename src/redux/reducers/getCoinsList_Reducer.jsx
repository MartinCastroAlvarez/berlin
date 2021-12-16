import {
    GET_COINS_LIST_SUCCESS,
    GET_COINS_LIST_ERROR,
    GET_COINS_LIST_START
} from "../types"

export const getCoinsListState = {
    coins: [],
    error: null,
    loading: false
}

export const getCoinsListReducer = (state = getCoinsListState, {type, payload}) => {
    
    switch (type) {
        case GET_COINS_LIST_START:
            return {
                ...state,
                loading: true,
            }
        case GET_COINS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                coins: payload
            }
        case GET_COINS_LIST_ERROR:
            return {
                ...state,
                loading: true,
                error: payload
            }
        default:
            return state
    }
}