import React, {useState, useEffect, useRef} from 'react';
import '../LoginAvatar/Dropdown.css'
import { Avatar } from '@mui/material';


const Avatarmenu = () => {

    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
          }      
        };
        document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' >
          <Avatar alt='' src='' className='avatar' onClick={()=>{setOpen(!open)}}/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Prateek<br/></h3>
          <ul>
            <DropdownItem  text = {"My Orders"}/>
            <DropdownItem  text = {"Settings"}/>
            <DropdownItem  text = {"Helps"}/>
            <DropdownItem text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
            <a>{props.text}</a>
        </li>
    )
}

export default Avatarmenu