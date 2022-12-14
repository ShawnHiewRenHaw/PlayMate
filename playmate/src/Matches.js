import React from 'react';
import './Matches.css';

import Avatar from '@mui/material/Avatar';
import {Stack} from '@mui/material';

function Matches() {
    return (
        <div className="matches">
            <div className="matches_icon">

           

            <Stack spacing={4}>
                <Stack direction='row' spacing ={1}>
                <Avatar
                    src='https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg'
                    alt='bret'
                    sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                    src='https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
                    alt='dave'
                    sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                    src='https://www.thestatesman.com/wp-content/uploads/2022/07/AmericanBullysobakabarobaka-4ce0d4dc0e144dccadb5159b222e275e-e1657808052501.jpg'
                    alt='jess'
                    sx={{ width: 60, height: 60 }}
                    />
                    <Avatar 
                    src='https://www.purina.co.nz/sites/default/files/2020-12/15-Amazing-Dog-FactsTEASER.jpg'
                    alt='sam'
                    sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                    src='https://media.fisheries.noaa.gov/2020-10/blue%20catfish%20face.jpg?VersionId=null'
                    alt='dave'
                    sx={{ width: 60, height: 60 }}
                    />

                </Stack>
            </Stack>
            </div>
        
        </div>
        );
}


export default Matches;