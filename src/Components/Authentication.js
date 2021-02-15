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
      margin: theme.spacing(2),
      
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
    
  <form className={classes.root} noValidate autoComplete="on">
        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Help</a></li>
           <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
        </ul>
        <h1 className="responsive-headline">
          Registration Form
        </h1>
        <hr />
        <ul id="authentication">
        <React.Fragment>
        
        <div>
        <label className="label"> Handle 
          <TextField className="textfield" id="filled-basic" variant="filled"  />
        </label> 
        </div>
        <div>
          <label className="label1"> Name
          <TextField className="textfield" id="filled-basic" variant="filled"  />
          </label>
        </div>
        <div>
          <label className="label2"> Email-id
          <TextField className="textfield" id="filled-basic" variant="filled"  />
          </label>
        </div>
        <div>
          <label className="label3"> Bio
          <TextField className="textfield" id="filled-basic" variant="filled"  />
          </label>
        </div>
        <div>
          <label className="label4"> Phone Number
          <TextField className="textfield" id="filled-basic" variant="filled"  />
          </label>
        </div>
        <div>
          <label className="label5"> OTP
          <TextField className="textfield" id="filled-basic" variant="filled"  />
          </label>
        </div>
      {/* <div className="row banner" > */}
      <ul className="social">
      <BackButton />
      <button onClick={routeChange1} className="btn">Register Now</button>
    </ul>
    {/* </div> */}
    </React.Fragment>
    </ul>
   </form>
  );
}

export default Authentication;