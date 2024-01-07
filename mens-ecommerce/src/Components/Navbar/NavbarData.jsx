import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { GiTrousers } from "react-icons/gi";
import { GiPoloShirt } from "react-icons/gi";
import { GiUbisoftSun } from "react-icons/gi";
import { FaRuler } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiShirtFoldedFill } from "react-icons/pi";

export const navbarData = [
    {
        title:"Home",
        icon: <IoMdHome style={{fontSize:'23px', color:"#66fcf1"}}/>,
        link: "/home",
        cname:"nav-text"
    },
    {
        title:"Shirts",
        icon: <PiShirtFoldedFill style={{fontSize:'23px', color:"#66fcf1"}}/>,
        link: "/topwear",
        cname:"nav-text"
    },
    {
        title:"T-Shirts",
        icon: <GiPoloShirt style={{fontSize:'23px', color:"#66fcf1"}}/>,
        link: "/topwear" ,
        cname:"nav-text"
    }
    // {
    //     title:"Bottom Wear",
    //     icon: <GiTrousers style={{fontSize:'23px'}}/>,
    //     link: "/bottomwear",
    //     cname:"nav-text"
    // },
    // {
    //     title: "Ethnic Wear",
    //     icon: <GiUbisoftSun style={{fontSize:'23px'}}/>,
    //     link: "/ethinic",
    //     cname:"nav-text"
    // },
    // {
    //     title: "Measurements",
    //     icon: <FaRuler style={{fontSize:'23px'}}/>,
    //     link: "/measurements",
    //     cname:"nav-text"
    // } 
]

