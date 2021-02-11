import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

function Submission() {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
      },
      {
        Header: "Submission Date",
        
      },
      {
        Header: "Category",
        
      },
      {
        Header: "Status",
        
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  return (
    <header id="Submission">
      
    <nav id="nav-wrap">
       
       <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
       <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Help</a></li>
          <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
       </ul>
       
    
    <div className="table">
      <Table columns={columns} data={data} />
    </div>
    <ul className="social">
        <button className="button save"> Update </button>
        <button className="btn submit"> Delete </button>
    </ul>
    </nav>
    </header>
  );
}

export default Submission;