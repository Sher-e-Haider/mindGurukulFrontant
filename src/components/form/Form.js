import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { AiOutlineEdit } from "react-icons/ai"
import TextField from '@mui/material/TextField'
import {useNavigate} from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { createPosts, getPosts, updatePost } from '../../redux/actions/noteAction'
import { Button } from '@mui/material'
import './form.css'
import { signout } from '../../redux/actions/userAction'
import { useEffect } from 'react'

const Form = ({currentId,setCurrentId}) => {
    const [postData,setPostData] = useState({title:'',note:''})
    const dispatch=useDispatch()
    const [data,setData] = useState(JSON.parse(localStorage.getItem('profile')))
    //console.log(data,'dataaa');
    const history = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        //  dispatch(getPosts())
        // if(currentId){
        //   dispatch(updatePost(currentId,postData))
        // }else{
        //   dispatch(createPosts(postData))
        // }
        
      
          // dispatch(createPosts(postData))
          if (!currentId) {
            dispatch(createPosts({ ...postData, name: data?.result?.name }));
           console.log('create');
          } else {
            dispatch(updatePost(currentId, { ...postData, name: data?.result?.name }));
           
          }
          setCurrentId(null)
         setPostData({title:'',note:''})
       }
      
  return (
    <div className='form_displays'>
    {/* <ToastContainer position="bottom-center" limit={1} /> */}
     <form autoComplete='off' noValidate type='submit' onSubmit={handleSubmit} className='text' >
     <div>
     <TextField id="outlined-basic" label="Subject" value={postData.title} variant="outlined" onChange={(e)=>setPostData({...postData,title:e.target.value})} />
      {/* <label htmlFor="title">Title</label> */}
      {/* <input   id="outlined-basic"  label="Enter Your Item"  value={postData.title} variant="outlined" onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
      */}
    </div>

    <div>
      <TextField id="outlined-basic" multiline rows={3} label="Yadein" value={postData.note} variant="outlined" onChange={(e)=>setPostData({...postData,note:e.target.value})} />
        {/* <label htmlFor="title">note</label>
      <input   id="outlined-basic"  label="Enter Your Item"  value={postData.note} variant="outlined" onChange={(e)=>setPostData({...postData,note:e.target.value})}/>
  */}
      </div>
     <Button disabled={(postData.title==='' || postData.note==='')} type='submit'  variant="contained" >{currentId?<EditIcon />:'submit'}</Button>
      
      
          
          
     
    
      </form>
     
     </div>
  )
}

export default Form
