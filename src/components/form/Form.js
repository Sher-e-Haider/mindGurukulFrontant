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

const Form = ({currentId,setCurrentId,x}) => {
    const [postData,setPostData] = useState({userName:'',email:'',phone:''})
    const dispatch=useDispatch()
    const data = useState(JSON.parse(localStorage.getItem('profile')))
    const posts = useSelector(state=>state.alldata)
    const history = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
    
          if (!currentId) {
            dispatch(createPosts({ ...postData, name: data?.result?.name }));
          
          } else {
            dispatch(updatePost(currentId, { ...postData, name: data?.result?.name }));
           
          }
          setCurrentId(null)
         setPostData({userName:'',email:'',phone:''})
       }
      
  return (
    <div className='form_displays'>
    {/* <ToastContainer position="bottom-center" limit={1} /> */}
     <form autoComplete='off' noValidate type='submit' onSubmit={handleSubmit} className='text' >
     <div>
     <TextField id="outlined-basic" label="UserName" value={postData.userName} variant="outlined" onChange={(e)=>setPostData({...postData,userName:e.target.value})} />
     
    </div>
    <div>
     <TextField id="outlined-basic" label="Email" value={postData.email} variant="outlined" onChange={(e)=>setPostData({...postData,email:e.target.value})} />
     
    </div>
    <div>
      <TextField id="outlined-basic" multiline  label="Phone" value={postData.phone} variant="outlined" onChange={(e)=>setPostData({...postData,phone:e.target.value})} />
       
      </div>
      { 
       data[0]&&
        <Button disabled={(postData.userName==='' || postData.email===''|| postData.phone==='')} type='submit'  variant="contained" >{currentId?<EditIcon />:'submit'}</Button>
      
      
      }
     
      
      
          
          
     
    
      </form>
     
     </div>
  )
}

export default Form
