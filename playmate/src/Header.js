import React from 'react';
import './Header.css';
import ForumIcon from '@mui/icons-material/Forum';
import PetsIcon from '@mui/icons-material/Pets';
import ezyLogo from './ezyLogo.PNG'
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Dropdown } from 'semantic-ui-react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function Header(){

   

    return (
        
        <div className="header">

                <IconButton>
                    <PetsIcon className="header__icon" fontSize="large" />

                </IconButton>

                <IconButton>
                    <LocalHospitalIcon className="header__icon" fontSize="large" />

                </IconButton>


                <img
                    className="header__logo"
                    src={ezyLogo} alt="EzyVet Logo" />





                <Link to="/chat">
               
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
                </Link>


            </div>
    )
}

export default Header