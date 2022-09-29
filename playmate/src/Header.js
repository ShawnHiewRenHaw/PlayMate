import React from 'react';
import './Header.css';
import ForumIcon from '@mui/icons-material/Forum';
import PetsIcon from '@mui/icons-material/Pets';
import ezyLogo from './ezyLogo.PNG'
import { IconButton } from '@mui/material';
import { Link, Route } from 'react-router-dom';


function Header(){
    return (
        //BEM
    <div className ="header">
         
        <IconButton> 
        <PetsIcon className="header__icon" fontSize="large"/>

        </IconButton>
        
       
       
        <img 
         className= "header__logo"
         src={ezyLogo} alt ="EzyVet Logo"/>

         
         <IconButton>
         <ForumIcon className="header__icon" fontSize="large"/>
         </IconButton>
         
    </div>
    )
}

export default Header