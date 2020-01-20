import React from 'react';
import './Menustyle.css';

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div>
   <nav className="navstyle">
    <ul>
       <li> <Link to=""> Involved Party </Link> </li>
       <li> <Link to="AccountTransaction"> Account Transaction </Link> </li>
    </ul>
   </nav>
  </div>
 )

} 

export default Menu;