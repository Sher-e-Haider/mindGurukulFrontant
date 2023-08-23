import React, { useState } from 'react'
//import { Button } from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import { signin, signup } from '../redux/actions/userAction'
import Appbar from '../components/appbar/Appbar'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Gender from './Gender';
import ControlledCheckbox from './Checked';
import BasicSelect from './DropDown';
import AutoSuggested from './AutoSuggested';


const Auth = () => {
    const [accountToggle,setAccountToggle] = useState(false);
    const [list,setList] = useState([]);
    const [checked, setChecked] = React.useState({
    linkdin:true,
    friends:true,
    jobPortal:true
    }); 
    const profile = (JSON.parse(localStorage.getItem('profile')));
   const {loading,error,data} = useSelector(state=>state.userRegister);
    const user = useSelector(state=>state.userSignin);
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [body,setBody] = useState({
      name:'',
      email:'',
      password:'',
      phone:'',
      gender:'',
      howListen:[],
      city:'',
      state:'',
    })
 
    const dispatch = useDispatch();
    const history = useNavigate();
   
    const handleSubmit = (e)=>{
    // console.log(inputData,'pppppp',body);
      e.preventDefault()
      if(accountToggle){
        dispatch(signup(body,history));
        setShow(true)
        setTimeout(()=>{
         setShow(false);
        },[3000]);
      }else{
        dispatch(signin(body.email,body.password,history));
        setShow1(true)
        setTimeout(()=>{
         setShow1(false)
        },[3000]);
      }
       
      //  setShow(true)
      //  setShow1(true)
      //  setTimeout(()=>{
      //   setShow(false);
      //   setShow1(false)
      //  },[3000]);
       
    }
   console.log(profile,user);
    // useEffect(() => {
    //   if(profile){
    //      history('/home',{replace:true});
    //     // data.message=null
    //    }
    // }, [history,profile])
   
    
   
    function handleChange(data) {
       //console.log(data);
       if(data==='linkdin'){
        if(checked.linkdin===true && !list.includes('linkdin')){
          console.log(data);
          //setList([...list,'linkdin'])
          setBody({...body,howListen:[...body.howListen,'linkdin']})
        }
        setChecked({...checked,linkdin:!checked.linkdin})
       }
       if(data==='friends'){
        
        if(checked.friends===true && !list.includes('friends')){
          //if(){
            // setList([...list,'friends'])
             setBody({...body,howListen:[...body.howListen,'friends']})
         // }
         
        }
        setChecked({...checked,friends:!checked.friends})
       }
       if(data==='job portal' && !list.includes('job portal')){
        if(checked.jobPortal===true){
          console.log(data);
         // setList([...list,'job portal'])
         setBody({...body,howListen:[...body.howListen,'job portal']})
        }
        setChecked({...checked,jobPortal:!checked.jobPortal})
       }
   }
  //  if(loading){
  //   return (
  //     <div><Loading /></div>
  //   )
  // }
  return (


  <div className='relative w-[360px]' >
  <div className='fixed top-0 right-0 w-full' >
 {/* <SignSignupNavbar /> */}
 </div>
  <section id="contact" className="relative top-16 otpGenerate bg-white border-[0.6px] border-gray-400 mx-auto py-8">
  {/* HEADINGS */}
       <p className="font-playfair font-semibold text-4xl text-center">
         WEL <span className="text-blue">COME</span>
        </p>
        {/* <div className='absolute end-0 top-0 p-1 rounded-full m-1 saturate-200 duration-200 hover:shadow-md hover:bg-neutral-300' 
             onClick={()=>setAccountToggle({...accountToggle,signup:false})} >  <CloseIcons/></div>
   */}
   
  {/* FORM & IMAGE */}
  <div className="relative mt-5">
   
  { (show1 &&user?.error) &&
        <div className='text-white rounded-full py-2 bg-error text-center'>{user?.error}</div>
      }
      { (show &&error) &&
        <div className='text-white rounded-full py-2 bg-error text-center'>{error}</div>
      }
      {(show && data) &&
        <div className='text-white rounded-full py-2 text-center text-bold bg-green-600'>{accountToggle?data?.message:user.data?.mesaage}</div>
      }
      <form onSubmit={handleSubmit} >
     {
      accountToggle && (
        <input
          className="w-full outline-none font-semibold placeholder-opaque-black p-3"
          id='name'
          type="text"
          placeholder="NAME"
          value={body.name}
          onChange={(e)=>setBody({...body,name:e.target.value})}
         
          
        />
      )
     }
       
        <input
          className="w-full outline-none font-semibold placeholder-opaque-black p-3"
          id='email'
          type="email"
          placeholder="EMAIL"
          value={body.email}
          onChange={(e)=>setBody({...body,email:e.target.value})}
          //register={{...register("email")}}
          //errorMessage = {errors.email?.message}
          
        />
         <input
          className="w-full outline-none font-semibold placeholder-opaque-black p-3"
          id='password'
          type="password"
          placeholder="Password"
          value={body.password}
          onChange={(e)=>setBody({...body,password:e.target.value})}
          //register={{...register("email")}}
          //errorMessage = {errors.email?.message}
          
        />
        {
      accountToggle && (
       <div className='flex ' >
        <div className=' h-5 w-8 mt-8' >+91</div>
        <div className='w-full mr-1' >
        <input
          className="w-full mx-1 font-semibold  outline-none  placeholder-opaque-black p-3 mt-5"
          type="number"
          id="phoneNumber"
          placeholder="phone number"
          value={body.phone}
          onChange={(e)=>setBody({...body,phone:e.target.value})}
         />
        </div>
        </div>
       ) }
         {
          accountToggle && (
         <div>
        <div>
          <Gender setBody={setBody} body={body} />
        </div>
         <div>How did you listen about here:</div>
       
        
         <div className='flex gap-3'>
          <div className='flex'>
           <p>Linkdin:</p>
           <input 
           className='border border-red relative w-[30px]' 
           value = 'linkdin'
           id="linkdin"
           type = "checkbox" 
           onChange = {()=>handleChange("linkdin")} 
          //register={{...register("linkdin")}}
         // errorMessage = {errors.linkdin?.message}
           />
        
          </div>
          <div className='flex'>
           <p>Friends:</p>
           <input className='border border-red relative w-[30px]' value = {checked.friends} type = "checkbox" onChange = {()=>handleChange("friends")} />
        
          </div>
          <div className='flex'>
           <p>Job portal:</p>
           <input className='border border-red relative w-[30px]' value = {checked.jobPortal} type = "checkbox" onChange = {()=>handleChange("job portal")} />
        
          </div>
      </div>
        <div><BasicSelect setBody={setBody} body={body} /></div>
        <AutoSuggested setBody={setBody} body={body} /></div>
     ) }
        <button
          className={`w-full px-14 py-3 rounded-full  border bg-blue text-white mt-5 hover:bg-hover-blue hover-border-none  hover:text-footer-light mb-4 transition duration-500`}
          type="submit"
      
        >
         {accountToggle?'Sign Up':'Log In'} 
        </button>
      </form>
   
      <button type="button"  onClick={()=>setAccountToggle(()=>setAccountToggle(!accountToggle))} >{accountToggle ?'I ALREADY HAVE AN ACCOUNT':'CREATE NEW ACCOUNT'}</button>
   
    
  </div>
</section>
{/* <div className='fixed bottom-0 w-full -z-10' ><Footer /></div> */}
</div>

  )
}

export default Auth
