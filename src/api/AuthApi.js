import * as types from './types.js';

const url = "http://localhost:8800/"

export const createUser = (firstname, lastname, email, password, confirmPassword, phone) => async dispatch => {
    try {
        const response = await fetch('http//localhost:5001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, lastname, email, password, confirmPassword, phone })
        }).then(data => { return data.json() });

        dispatch({ type: types.REGISTER_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
    }
}


export const signin = (email, password) => async dispatch => {
    try {
        const response = await fetch('http//localhost:5001/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(data => { return data.json() });

        dispatch({ type: types.SIGNIN_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
    }
}


export const logout = () => dispatch => {
    dispatch({ type: types.LOGOUT });
}