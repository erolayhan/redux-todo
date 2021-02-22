import {combineReducers, createStore} from 'redux';
import reducer from './reducers/list-reducer'
export default createStore(
    combineReducers(
        {reducer}
    )
);
