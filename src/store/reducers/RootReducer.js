import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ContactReducer from './ContactReducer'


const RootReducer = combineReducers({
    auth:AuthReducer,
    contact:ContactReducer
})

export default RootReducer