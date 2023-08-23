import React from 'react'

const Loading = () => {
  return (
<div className=' min-h-[82vh] flex items-center  justify-center z-50' >
<div className="spinner-border text-primary"  role="status">
  <span className="visually-hidden"></span>
</div>
</div>
  )
}

export default Loading

export const  Input=({id,placeholder,type,register,errorMessage})=>{
    return(
        <div className="block">
            <input type={type} id={id} placeholder={placeholder} {...register}
            className="w-full border-b-[0.5px] border-gray-400  outline-none bg-transparent placeholder-opaque-black p-3 mt-5"
             />
            <div className="text-danger">{errorMessage}</div>
        </div>
    )
}