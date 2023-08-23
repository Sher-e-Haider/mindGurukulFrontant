import Axios from "axios"

const url = 'https://mindgurukul.onrender.com'
const URL = "http://localhost:5000"
const API = Axios.create({ baseURL: url });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


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
    console.log(post);
    try {
        const {data} = await API.patch(`/api/update/${id}`,post)
        dispatch({type:"UPDATE",payload:data})
    } catch (error) {
         dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

export const getById=(id)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
   
    try {
        const {data} = await API.get(`/api/get/${id}`)
        dispatch({type:"GET",payload:data})
    } catch (error) {
         dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}