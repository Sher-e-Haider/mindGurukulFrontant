import { combineReducers } from 'redux'
import { fetchData } from './noteReducers'
import { userRegisterReducer, userSigninReducer } from './userReducers'
// import { posts,createPost } from './noteReducers'
//import auth from './auth'

export default combineReducers({
    alldata:fetchData,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    
})