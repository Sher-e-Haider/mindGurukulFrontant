import  React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BasicSelect({setBody , body}) {
  const [city, setCity] = useState('');
  useEffect(()=>{
    setBody({...body,city:city});
  },[city])
  const handleChange = (event) => {
    setCity(event.target.value);
    setBody({...body,city:event.target.value})
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
          <MenuItem value={'Pune'}>Pune</MenuItem>
          <MenuItem value={'Ahmedabad'}>Ahmedabad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
