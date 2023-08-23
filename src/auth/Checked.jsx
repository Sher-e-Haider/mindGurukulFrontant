import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ControlledCheckbox({setBody , body}) {
  const [checked, setChecked] = useState({
    linkdin:false,
    friends:false,
    jobPortal:false
  });
  const [list,setList] = useState([])

  const handleChange1 = (event) => {
    setChecked({...checked,linkdin:event.target.checked});
  };
  const handleChange2 = (event) => {
    setChecked({...checked,friends:event.target.checked});
  };
  const handleChange3 = (event) => {
    setChecked({...checked,jobPortal:event.target.checked});
  };
  //console.log(checked,list);
  useEffect(()=>{
   // setList([checked])
   setBody([{...body,howListen:[checked]}])
   console.log(body);
    
  },[checked])
  
  return (
    
    <div className='flex'>
      <FormControlLabel
        label="Linkdin"
        control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Friends"
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Job Portal"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      </div>
   // </Box>
  );
}
