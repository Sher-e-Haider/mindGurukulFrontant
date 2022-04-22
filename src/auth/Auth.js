import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import { signin, signup } from '../redux/actions/userAction'
import Appbar from '../components/appbar/Appbar'
import GoogleAuth from './googleAuth'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './style';

const initialData = {name:'',password:'',confirmPassword:'',email:''}
const Auth = () => {
    const [formData,setFormData] =useState(initialData)
    const [isSignup,setIsSignup] = useState(false)
    const data = (JSON.parse(localStorage.getItem('profile')))
     const [show,setShow] = useState(true)
    const classes = useStyles();
    const user = useSelector(state=>state.userRegister)
    let userSignin = useSelector(state=>state.userSignin)
    console.log(user,'user',data,data);
    let {error,loading} = userSignin
    let {load,userInfo,lodi} = user
    //loading=true
    
    
    const dispatch = useDispatch()
    const history = useNavigate()
    // console.log(formData);
    const handleCHange=(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  
    const handleSubmit=(e) => {
       e.preventDefault()
       
       if(isSignup){
        
          
        
           if(formData.password===formData.confirmPassword){
            
            dispatch(signup(formData.name,formData.email,formData.password,history))
            setShow(load)
           
            // if(userInfo){
            //   return toast.success('successfully created account, please signin')
            // }
           
             setTimeout(() =>{
             
           
              setShow(!load)
           
            
             
              console.log(show,'pppp');
              
           
           },1000)
           if(!show){
            return toast.success(`user already exists with this ${formData.email}`)
          }
           }
           if(formData.password!==formData.confirmPassword){
            return toast.error('password and confirmPassword are not equal')
           }
            
         
      }
       
       else{
        dispatch(signin(formData.email,formData.password,history))
           setTimeout(() =>{
              if(!loading ){
              console.log('hlo');
         
                return toast.error(`may user or password wrong`)
              }
           },1000)
            
         
         
         
        
       }

    }
   
  return (
    <div className='whole'>
 
   
    <div className="appbar">
   
   
   <div className='load'>
      { 
        (show===false) &&(<div>{`user already exists with this ${formData.email}`}</div>)
      }
    </div>
   
    
   
    <Appbar/>
   
    <div className='main'>
    <ToastContainer position="bottom-center" limit={1} />
     <form onSubmit={handleSubmit} className='form'>
      <div className="all">
      {
        isSignup && 
        <div className='name'>
        <label htmlFor="name" className='label'>Name:</label>
         <input type="text" name='name' placeholder='name' required onChange={handleCHange} />
        </div>
       
      } 
          <div className='input_flex'>
             <label htmlFor="email" className='label'>Email:</label>
           <input type="email" name='email'  placeholder='enter email' required onChange={handleCHange} />
          
          </div>
          
           <div className='input_flex'>
             <label htmlFor="password" className='label'>Password:</label>
           <input type="password" name='password'  placeholder='password' required onChange={handleCHange} />
           
           </div>
                
          
          
       
      
       
       {
           isSignup&&(
             <div className='name'>
                 <label htmlFor="confirmPassword" className='label'>ConfirmPassword:</label>
               <input type="password" name='confirmPassword'  placeholder='enter confirmPassword' required onChange={handleCHange} />
       
             </div>
               
           )
           
       }
       
 <GoogleAuth/>
       
      <div className='signin'>
          <Button className={classes.signButton} variant="contained" color="primary" type="submit">{isSignup?'signUp':'signIn'}</Button> 
      </div>
       <div className="signin">
         <Button className={classes.signButton} variant="outlined" color="primary" onClick={()=>setIsSignup(!isSignup)} >
           {
               isSignup?'Already have an account':'create your accont'
           }
       </Button>
       </div>
       
      </div>
      </form> 
    </div>
    </div>
    </div>
  )
}

export default Auth
