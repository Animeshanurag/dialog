import React from 'react';
import {
   useHistory
} from "react-router-dom";

function Header() {
   const history = useHistory();
    
      const routeChange = () =>{ 
        let path = '/Components/Authentication'; 
        history.push(path);
      }
   

    return (
      <header id="home">
      
      <nav id="nav-wrap">
         
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Help</a></li>
            <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
         </ul>
         
      </nav>
      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">Are you the next sensational writer?</h1>
            <h3>Win Prizes worth $10000*.</h3>
            <ul className="social">
               <button className="button project-btn">Tell me more</button>
               <button onClick={routeChange}  className="btn github-btn">Register Now</button>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }

export default Header ;