import {combineReducers} from 'redux'
import ReducerName from '../../ReducerName';
import Reducer from "./Reducer";
import Reducer2 from './Reducer2'
import ReducerBook from './ReducerBook';
const  Reducers = combineReducers({
    amount:Reducer,
    regis:Reducer2,
    userdata:ReducerName,
    Booking:ReducerBook
})

export default Reducers;