import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { GiTrousers } from "react-icons/gi";
import { GiPoloShirt } from "react-icons/gi";
import { GiUbisoftSun } from "react-icons/gi";
import { FaRuler } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export const navbarData = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title:"Top Wear",
        icon: <GiPoloShirt />,
        link: "/topwear"
    },
    {
        title:"Bottom Wear",
        icon: <GiTrousers/>,
        link: "/bottomwear"
    },
    {
        title: "Ethnic Wear",
        icon: <GiUbisoftSun/>,
        link: "/home"
    },
    {
        title: "Measurements",
        icon: <FaRuler />,
        link: "/home"
    } 
]

