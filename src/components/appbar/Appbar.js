import * as React from 'react';
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
 import IconButton from '@mui/material/IconButton';
 import MenuIcon from '@mui/icons-material/Menu';
  import useStyles from './style'
 import { useDispatch } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import './appbar.css'
import { signout } from '../../redux/actions/userAction';

 const Appbar = ()=> {
     const data =JSON.parse(localStorage.getItem('profile'))
     
    
    const classes = useStyles();
    const dispatch=useDispatch()
    const history=useNavigate()
  
//   useEffect(()=>{
//     if(data){
//       history('/',{replace:true})
//     }
    
//   },[data,history])


const logout=() => {
  dispatch(signout())
  history('/auth',{replace:true})
 console.log('logout');
}


  
 

  return (
    <div className="appbar">
    
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.AppBar} position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          { data?.result?.googleId ?(
            <Typography className={classes.img} variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <img src={data.result.imageUrl} alt="" />
         </Typography>):(<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Soch
          </Typography>) 
          }
        

          { data?.result?._id?(
            <Typography className={classes.para} xs={12} sm={6} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="para"> Swagat hai Aapka </div>
            </Typography>
           ) :data?.result?.googleId? (
            <Typography className={classes.img} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { data.result.name} 
          </Typography>):null 
          }
          
     
         
       
          
         
          { (data)  &&(
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
           { data.email}
          </Typography>
           
          )}
       
        <Button color="inherit" onClick={logout}>{data?'LogOut':'Login'}</Button>
          
        </Toolbar>
       
      </AppBar>
    </Box>
    </div>
    
   
  );
}

export default Appbar
