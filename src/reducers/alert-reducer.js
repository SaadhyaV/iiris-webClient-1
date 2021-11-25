import * as types from '../actions/actions-types';

const initialState = {
    alerts: [],
    alert: {},
    // searchResultProducts: []
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload)
    switch (type) {
        case types.CREATE_ALERT_SUCCESS:
            return {
                ...state,
                // ...payload
                alerts: [...this.state.alerts, payload]
            }
        case types.ALERTS_SUCCESS:
            return {
                ...state,
                ...payload
                // alerts: payload
            }
        // case types.GET_PRODUCT:
        //     return {
        //         ...state,
        //         alert: payload
        //     }
        // case types.EDIT_PRODUCT:
        //     return {
        //         ...state,
        //         product: payload
        //     }
        // case types.DELETE_PRODUCT:
        //     return {
        //         ...state,
        //         product: null
        //     }
        // case types.GET_PRODUCTS_BY_KEYWORD:
        //     return {
        //         ...state,
        //         searchResultProducts: [...this.state.searchResultProducts, payload]
        //     }
        default:
            return state;
    }
}