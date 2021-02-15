import React from 'react';
import maskgroup from '../maskgroup.png';

function CompetitionRules() {
  
    return (
      <section id="about">
         <div className="twelve columns main-col">
               <h1>Competition Rules</h1>
                  <p className="address">
						   <span>This is Rule 1</span><br />
						   <span>This is Rule 1<br />
                     This is Rule 1<br /> 
                     This is Rule 1<br />
                     This is Rule 1
                   </span>
					   </p>
                  
         </div>
         <div className="three columns">
            <img className="masked"  src={maskgroup} alt="masked typewriter" />
         </div>
   </section>
    );
}

export default CompetitionRules;
