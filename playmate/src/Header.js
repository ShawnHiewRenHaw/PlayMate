import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ezyLogo from './ezyLogo.PNG'
import { IconButton } from '@mui/material';

function Header(){
    return (
        //BEM
    <div className ="header">
        <IconButton> 
        <PersonIcon className="header__icon" fontSize="large"/>

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