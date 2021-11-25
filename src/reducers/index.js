import { combineReducers } from 'redux';

// Reducers
import alertReducer           from './alert-reducer';
import userReducer            from './users';

// Combine Reducers
var reducers = combineReducers({
    alertReducer
});

export default reducers;