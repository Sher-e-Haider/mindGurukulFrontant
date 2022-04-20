import { CREATEFAIL, CREATEREQUEST, CREATESUCCESS, NOTEFAIL, NOTEREQUEST, NOTESUCCESS } from "./noteContants"
import Axios from "axios"


const API = Axios.create({ baseURL: 'https://notes-sahil.herokuapp.com' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

// export const getPosts = ()=> async(dispatch)=>{
//     dispatch({type:NOTEREQUEST})
//     try {
//         const {data} = await Axios.get(url)
//         dispatch({type:NOTESUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:NOTEFAIL,payload:error})
//     }
// }
export const getPosts=()=>async(dispatch)=>{
    // dispatch({type:"REQUEST"})
    try {
        const {data} = await API.get('/api')
        dispatch({type:"FETCH",payload:data})
    } catch (error) {
        // dispatch({type:"FAIL",payload:error})
        console.log(error.message);
    }
}

export const createPosts=(newPost)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.post('/api',newPost)
        dispatch({type:"CREATE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

// export const createPosts = (postData)=> async(dispatch)=>{
//     dispatch({type:CREATEREQUEST})
//     try {
//         const {data} = await Axios.post(url,postData)
//         dispatch({type:CREATESUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:CREATEFAIL,payload:error})
//     }
// }



export const deletePost=(id)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.delete(`/api/delete/${id}`)
        dispatch({type:"DELETE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

export const updatePost=(id,post)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.patch(`/api/update/${id}`,post)
        dispatch({type:"UPDATE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}