import React from "react";
import '../assets/styles/Components/Header.scss'

const Header = () => {
  return (
      <header> 
    <nav>
        <div className="nav-initial-section"> 
            <p> Digital Nomadas </p>
        </div>
        
    <ul className="nav-right-section">
        <li> 
            <a href=" "> Ingresar </a>
        </li>
        <li> 
         <a href=" "> Registrarse </a>
       </li>
      <li className="menu-icon"> 
         <a href=" "> </a>
     </li>
     <li> 
         <a href=" "> 
         <img src="https://img.icons8.com/fluent/48/000000/gender-neutral-user.png"/>
         </a>
     </li>
    </ul>
</nav>     
</header>

  );

};

export default Header;
