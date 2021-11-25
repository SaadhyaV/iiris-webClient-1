import * as types from '../actions/actions-types';
import axios from 'axios'
const url = "http://localhost:8800/"

export const getAlerts = () => async dispatch => {
    // return (await axios.get(url)).data
    try {
        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(data => { return data.json() });
        console.log(response.data)
        dispatch({ type: types.ALERTS_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
    }
}
export const addAlerts = (request) => async dispatch => {
    try {
        const response = await fetch(`${url}/alerts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        }).then(data => { return data.json() });

        dispatch({ type: types.CREATE_ALERT_SUCCESS, payload: response });
    } catch (err) {
        console.log(err);
    }
}

