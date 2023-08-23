import { combineReducers } from 'redux'
import { fetchData } from './noteReducers'
import { userRegisterReducer, userSigninReducer } from './userReducers'

export default combineReducers({
    alldata:fetchData,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    
})