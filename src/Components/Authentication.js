import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from './BackButton';
import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: 500,
    },
  },
}));

function Authentication() {
  const classes = useStyles();
  const history = useHistory();
    
      const routeChange1 = () =>{ 
        let path = '/Components/Category'; 
        history.push(path);
      }

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      
      <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Help</a></li>
            <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
         </ul>
        <div>
        <TextField id="filled-basic" label="Handle" variant="filled" />
        </div>
        <div>
          <TextField error id="filled-basic" label="Name" variant="filled" />
          </div>
          <div>
          <TextField error id="filled-error-helper-text" label="Email-Id" variant="filled" />
        </div>
        <div>
          <TextField error id="outlined-error" label="Bio" variant="outlined" />
        </div>
        <div>
          <TextField error id="outlined-error-helper-text" label="Phone No." variant="outlined" />
        </div>
        <div>
          <TextField error id="outlined-error-helper-text" label="OTP." variant="outlined" />
        </div>
        <div>
        <BackButton />
        <button onClick={routeChange1} className="button">LOGIN</button>
      </div>
    </form>
  );
}

export default Authentication;