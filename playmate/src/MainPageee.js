import React from 'react'
import './MainPageee.css';
import {Stack} from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';




function MainPageee(){
   return(
    <CssVarsProvider>
    <Sheet variant="outlined">Welcome!</Sheet>
  </CssVarsProvider>
    )
}

export default MainPageee