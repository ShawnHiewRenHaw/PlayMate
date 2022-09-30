import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';


import './SwipeButtons.css';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
             <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
             <CloseIcon fontSize="large" /> 
            </IconButton>
            <IconButton className="swipeButtons_right">
             <FavoriteIcon fontSize="large" />  
            </IconButton>
            <IconButton className="swipeButtons_star">
             <StarRateIcon fontSize="large" />  
            </IconButton>
           
           
        </div>
    );
};

export default SwipeButtons;