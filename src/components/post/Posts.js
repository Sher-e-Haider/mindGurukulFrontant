import React from 'react'
import './posts.css'
import {MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { FiMoreVertical } from "react-icons/fi";
import { deletePost } from '../../redux/actions/noteAction';
import { Link } from 'react-router-dom';

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
    <h2 className='title'> {x.userName}</h2>
    <button onClick={()=>update(x._id)} className='moreIcon'><FiMoreVertical /></button>
    <Link to={`/${x._id}`} >
    <div className="content_note">
       <div className='note'>{x.email}</div>
       
    </div>
    </Link>
    <div className='note'>{x.phone}</div>
  
     <button className='react_icon' onClick={()=>deleted(x._id)}><MdDelete/></button>
    
    
       
         
    </div>
     
  )
}

export default Posts