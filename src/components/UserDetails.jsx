import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getById } from '../redux/actions/noteAction';


const UserDetails = () => {
    const { data } = useSelector(state=>state.alldata)
    const location = useLocation()
  
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getById(location.pathname.split('/')[1]))
    },[location])
  return (
    <div className='bg-red w-[200px] mt-4'>
    <h2 className='title'> {data?.userName}</h2>
   
    <div>
       <div className='note'>{data?.email}</div>
       
    </div>
    <div className='note'>{data?.phone}</div>
    
         
    </div>
  )
}

export default UserDetails
