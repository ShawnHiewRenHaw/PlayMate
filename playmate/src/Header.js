import React from 'react';
import './Header.css';
import ForumIcon from '@mui/icons-material/Forum';
import PetsIcon from '@mui/icons-material/Pets';
import ezyLogo from './ezyLogo.PNG'
import GroupIcon from '@mui/icons-material/Group';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';


function Header(){

   

    return (
        <div className="header">

               <img
                    className="header__logo"
                    src={ezyLogo} alt="EzyVet Logo" />


               <Link to="/meet">

                <IconButton>
                    <PetsIcon style={{ color: 'white' }} className="header__icon_" fontSize="large" />
                </IconButton>

                </Link>

                <Link to="/vet">
                <IconButton>
                    <LocalHospitalRoundedIcon style={{ color: 'white' }} className="header__icon_" fontSize="large" />
                </IconButton>
                </Link>
               

                <Link to="/petsit">

                    <IconButton>
                         <GroupIcon style={{ color: 'white' }} className="header__icon_" fontSize="large" />
                     </IconButton>

                 </Link>

                <Link to="/chat">

                    <IconButton>
                        <ForumIcon style={{ color: 'white' }} className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>


            </div>
    )
}

export default Header