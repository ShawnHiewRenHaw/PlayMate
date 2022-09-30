import React from 'react'
import './MainPageee.css';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';




function MainPageee(){
    
   return(
    <Sheet
    sx={{
      maxWidth: 400,
      mx: 'auto', // margin left & right
      my: 4, // margin top & botom
      py: 3, // padding top & bottom
      px: 2, // padding left & right
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRadius: 'sm',
      boxShadow: 'md',
    }}
  >

    <div>
    <Typography level="h4" component="h1">
      <b>Welcome!</b>
    </Typography>
    <Typography level="body2">Sign in to continue</Typography>
  </div>
  <TextField
    // html input attribute
    name="email"
    type="email"
    placeholder="johndoe@email.com"
    // pass down to FormLabel as children
    label="Email"
  />
  <TextField
    name="password"
    type="password"
    placeholder="password"
    label="Password"
  />
  <div>
  <Button
    sx={{
      mt: 1, // margin top
    }}
  >
    Welcome Back!! <Link href="/meet"> Log in </Link>
  </Button>
            </div>
  <Typography
    endDecorator={<Link href="/signup">Sign up</Link>}
    fontSize="sm"
    sx={{ alignSelf: 'center' }}
  >
    Don't have an account?
  </Typography>
  </Sheet>

  

  
    )
}

export default MainPageee