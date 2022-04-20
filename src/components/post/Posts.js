import React from 'react'
import './posts.css'
import {MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FiMoreVertical } from "react-icons/fi";
import { deletePost } from '../../redux/actions/noteAction';

const Posts = ({x,setCurrentId,data}) => {
  const dispatch=useDispatch()
  //console.log(x,'xxxx');
  const deleted=(id)=>{
   
    dispatch(deletePost(id))
    
  }
  const update=(id)=>{
    setCurrentId(x._id)
    console.log(id,'update');

  }
  return (

    <div className='cards_content'>
    <h2 className='title'> {x.title}</h2>
    <button onClick={()=>update(x._id)} className='moreIcon'><FiMoreVertical /></button>
     
    <div className="content_note">
       <div className='note'>{x.note}</div>
       
    </div>
    
     <button className='react_icon' onClick={()=>deleted(x._id)}><MdDelete/></button>
    
    
       
         
    </div>
  )
}

export default Posts