import React, { useEffect } from 'react'
import { useState } from 'react'
const state = ['Gujarat','Maharashtra','Karnataka']
const AutoSuggested = ({setBody , body}) => {
    const [input,setInput] = useState('');
    const [show,setShow] = useState(true);
   useEffect(()=>{
    if(input===''){
      setShow(true)
    }
    setBody({...body,state:input})
   },[input])
  return (
    <div>
     <div>State:</div>
     <div><input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='border border-gray-400 w-full' /></div>
      {
       
        state.filter((val)=>{
    if(input===""){
      return null
    }else if(val.toLowerCase().includes(input.toLowerCase())){
      return val
    }
  }) .map((x,i)=>(
      <div key={i} className =' cursor-pointer' onClick={()=>{
            setInput(x)
          //  console.log(x)
            setShow(false);
            
          }} >{show && x}</div>
       ))
     
      
     
      }
    </div>
  )
}

export default AutoSuggested
// .map((x,i)=>(
//     <div onClick={()=>{
//      setInput(x)
//      console.log(x)
//     }} >{x}</div>
//    ))