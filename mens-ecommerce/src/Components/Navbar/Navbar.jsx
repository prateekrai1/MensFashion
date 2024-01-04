import React from 'react'
import {navbarData} from './NavbarData';
//onClick={window.location.pathname = val.link}
const Navbar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
        {navbarData.map((val,key) => {
            return(
                <li key={key} className='item' >
                    {" "} 
                    <div style={{paddingRight:'6px'}}>{val.icon}</div>{" "}
                    <div>{val.title}</div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Navbar