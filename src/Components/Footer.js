import React from 'react';

function Footer() {
  
    return (
      <footer>

         <div className="row">
            <div className="twelve columns">
               <ul className="copyright">
                  <li>&copy; Copyright 2021 </li>
                  <a>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                  </a>
               </ul>

            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
         </div>
   </footer>
    );
}

export default Footer;
