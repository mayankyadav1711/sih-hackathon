import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewHeader = () => {
 
  
 
   return (
     <>

 

<nav>
<h4>Sankalp</h4>

<ul>
    <li><a>home</a></li>
    <li><a href="#" className="toggle-dropdown">Explore Projects <i className="fas fa-chevron-down"></i></a>
        <ul className="dropdown-menu">
            <li><a href="#">team 1</a></li>
            <li>
               
                <a href="#">team 2 
                     {/* <i className="fas fa-chevron-right"></i>  */}
                </a>
            </li>   
            <li><a href="#">team 3</a></li>
            <li><a href="#">team 4</a></li>
        </ul>   
    </li>
    <li><a href="#" className="toggle-dropdown">Resources <i className="fas fa-chevron-down"></i></a>
    </li>

<li><a href="#" className="toggle-dropdown">Explore Projects <i className="fas fa-chevron-down"></i></a>
        <ul className="dropdown-menu">
            <li><a href="#">team 1</a></li>
            <li>
               
                <a href="#">team 2 
                     {/* <i className="fas fa-chevron-right"></i>  */}
                </a>
            </li>   
            <li><a href="#">team 3</a></li>
            <li><a href="#">team 4</a></li>
        </ul>   
    </li>
    
    <li><a href="#">Login</a></li>
    <li><a href="#">Sign up</a></li>
</ul>
</nav>

  </>
  );
};

export default NewHeader;
