import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../form/Form'
import { getById, getPosts } from '../../redux/actions/noteAction'
import Posts from '../post/Posts'
import './home.css'
import { useState } from 'react'
import Appbar from '../appbar/Appbar'
import { Link } from 'react-router-dom'

const Home = () => {
  const [currentId,setCurrentId] = useState(null)
    const dispatch=useDispatch()
    const data =JSON.parse(localStorage.getItem('profile'))
       
    const posts = useSelector(state=>state.alldata)
    
    useEffect(() => {
         dispatch(getPosts())
       
      }, [dispatch,posts])
  
  return (
    <div>
   
   <Appbar/>
     
  
   
       <Form currentId={currentId} setCurrentId={setCurrentId}  />
    
  
    
     {/* <Posts posts={posts} /> */}
     {
       posts.length>0 &&(
         <ul className="cards">
       {
         posts.map((x,i)=>(
          <div key={x._id} >
          {
            (data?.result?.googleId===x?.creator||data?.result?._id===x?.creator||data?._id=== x?.creator )&&(
              <div className={`card card${i%10+1}`}  >
           
            <div className='single_card'>
               <Posts key={x._id} x={x} currentId={currentId} data={data} setCurrentId={setCurrentId} />
           
              </div>
             
           </div>
          
            )
          }
             
          
            
            
         
          
           </div>
           
           
         ))
       }
       </ul>
       )
     }
    
    </div>
  )
}

export default Home
