import React, { useState } from 'react';
import MyEditor from './MyEditor';
import Select from 'react-select';
import BackButton from './BackButton'
import {
  useHistory
} from "react-router-dom";

function Category() {
  const data = [
    {
      value: 1,
      label: "Category"
    },
    {
      value: 2,
      label: "Bloggers"
    },
    {
      value: 3,
      label: "Technical"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];
 
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(1);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
  const history = useHistory();
  const routeChange2 = () =>{ 
    let path = '/Components/Submission'; 
    history.push(path);
  }

 
  return (
    <header id="portfolio">
      <nav id="nav-wrap">
         
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Help</a></li>
            <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
         </ul>
         
      
        <div className="portfolio">
          <div className="selected">
            <Select
              placeholder="Select Option"
              value={data.find(obj => obj.value === selectedValue)} // set selected value
              options={data} // set list of the data
              onChange={handleChange} // assign onChange function
            />
          </div>
          <ul className="social">
          <BackButton />
                  <button onClick={routeChange2} className="button save" > Save As Draft </button>
                  <button onClick={routeChange2} className="btn submit"> Submit </button>
                </ul>
          <MyEditor />
        </div>
      </nav>
    </header>
  );
}

export default Category;
