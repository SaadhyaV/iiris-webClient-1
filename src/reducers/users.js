// import * as types from '../actions/actions-types';

// const initialState = {
//     users: [],
//     user: {},
//     // searchResultProducts: []
// }

// export default function(state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case types.REGISTER_SUCCESS: 
//             return{
//                 ...state,
//                 users: [...this.state.users, payload]
//             }
//         case types.SIGNIN_SUCCESS: 
//             return{
//                 ...state,
//                 users: [...this.state.user, payload]
//             }
//         case types.GET_USER_BY_ID:
//             return{
//                 ...state,
//                 user: payload
//             }
//         case types.UPDATE_USER:
//             return{
//                 ...state,
//                 user: payload
//             }
//         case types.DELETE_USER:
//             return{
//                 ...state,
//                 user: null
//             }
          
//         default:
//             return state;
//     }
// }