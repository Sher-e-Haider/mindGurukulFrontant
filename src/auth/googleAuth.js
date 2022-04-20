//544409631777-n24vfr2sk79lf0jlm8eer7qd6j8n6s0c.apps.googleusercontent.com
//988455849486-6rsv7i1kmo3e8uvdblqulslt733t69ui.apps.googleusercontent.com
//544409631777-n24vfr2sk79lf0jlm8eer7qd6j8n6s0c.apps.googleusercontent.com
import { Button } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Icon from './icon'
 import useStyles from './style';


const GoogleAuth = () => {
    const dispatch=useDispatch()
    const history=useNavigate()
     const classes = useStyles();
    const googleSuccess= async (res)=>{
        const result = res?.profileObj
        const token = res?.tokenId
        console.log(res);
        try {
            // dispatch({type:'USER_SIGNIN_SUCCESS',data:{result,token}})
            localStorage.setItem('profile',JSON.stringify({result,token}))
             history('/',{replace:true})
        } catch (error) {
            console.log(error);
        }
       
         
    }
    const googleFailure=()=>{
        console.log("unsuccessful");
     }
  return (
    <div className="googlebar">
       <GoogleLogin
                 clientId='544409631777-n24vfr2sk79lf0jlm8eer7qd6j8n6s0c.apps.googleusercontent.com'

                 render={(renderProps)=>(
                     
                          <Button 
                         className={classes.googleButton}
                        color="secondary"
                         fullWidth
                       
                         onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                         variant="contained"
                         startIcon={<Icon />}
                     > Login</Button>
                     
                    
                   
                    
                    
                 )}
                     onSuccess={googleSuccess}
                     onFailure={googleFailure}
                    //  cookiePolicy="single_host_origin"
             />
    </div>
  )
}

export default GoogleAuth
