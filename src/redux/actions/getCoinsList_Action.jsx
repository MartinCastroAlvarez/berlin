import axios from "axios"
import {
    GET_COINS_LIST_SUCCESS,
    GET_COINS_LIST_ERROR
} from "../types"

// Api 
const API_COINS_LIST = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export const GetCoinsListAction = () => async (dispatch) => {

    const data = await axios.get(API_COINS_LIST)
    try {
        dispatch({
            type: GET_COINS_LIST_SUCCESS,
            payload: data.data 
        })
    } catch (error) {
        dispatch ({
            type: GET_COINS_LIST_ERROR,
            payload: console.log(GET_COINS_LIST_ERROR)
        })
    }
}

//               ### Data info from api ###
//               --------------------------
// [{
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 48489,
//     "market_cap": 916574196270,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 1018277040121,
//     "total_volume": 32379207407,
//     "high_24h": 49422,
//     "low_24h": 46814,
//     "price_change_24h": 1620.31,
//     "price_change_percentage_24h": 3.4571,
//     "market_cap_change_24h": 30153134716,
//     "market_cap_change_percentage_24h": 3.40167,
//     "circulating_supply": 18902575,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 69045,
//     "ath_change_percentage": -29.7711,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 67.81,
//     "atl_change_percentage": 71408.77149,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2021-12-16T16:39:56.654Z"
// }]