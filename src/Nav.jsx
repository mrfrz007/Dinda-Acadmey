import React from 'react';
import {NavLink} from "react-router-dom";


const Nav=()=>{


    return (
        <>
        <div className="col-md-10 mx-auto px2 vhdl"  id="main_div"    >
            <div className="mt2"  >

          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact activeClassName="active" className="navbar-brand" to="/">DinDa Academy</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink  exact activeClassName="active" className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active" className="nav-link" to="about">About</NavLink>
      </li>
     
     
    </ul>
    
  </div>
</nav>
</div>
        </div>

        
        
        </>
    )
}

export default Nav;