import React from 'react'
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function SearchVet() {
    return (
        <CssVarsProvider>
            <Sheet sx={{
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
            }}>Enter your PostCode to go the website of the nearest vet to you!
                <TextField
                    postcode="PostCode"
                />

                <Button
                    sx={{
                        mt: 1, // margin top
                    }}
                >
                     <Link href="https://aucklandpethospital.co.nz"> Search </Link>
                </Button>
            </Sheet>
        </CssVarsProvider>
    )
}

export default SearchVet