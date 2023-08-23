import  Axios  from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "./noteContants";

const URL = "http://localhost:5000/auth"
const url = 'https://mindgurukul.onrender.com/auth'
export const signin = (email,password,history)=> async (dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}})
    try {
       const { data } = await Axios.post(`${url}/signin`,{ email,password })
      // console.log(data);
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
        localStorage.setItem('profile',JSON.stringify(data))
        history('/home',{replace:true})
    } catch (error) {
        dispatch({type:USER_SIGNIN_FAIL,
            payload:error.response && error.response.data.message
        ? error.response.data.message:
          error.message
            
        })
    }
}


export const signup = (body,history)=> async (dispatch)=>{
    dispatch({type:USER_REGISTER_REQUEST})
    try {
       const { data } = await Axios.post(`${url}/signup`,body)
       console.log(data,'pppp');
        dispatch({type:USER_REGISTER_SUCCESS,payload:data})
       // dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
      // localStorage.setItem('profile',JSON.stringify(data))
      //  history('/home',{replace:true})
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message
        ? error.response.data.message:
          error.message
            
        })
    }
}

export const signout=()=>async (dispatch)=>{
    localStorage.removeItem('profile')
    dispatch({type:USER_SIGNOUT})
}