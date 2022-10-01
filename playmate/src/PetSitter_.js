import React from 'react';
import "./PetSitter_.css";
import Avatar from '@mui/material/Avatar';
import {Stack} from '@mui/material';

function PetSitter_(){
    return(
        <div className="matches">
            <div className="matchesicon">

           
            <h1 className="ess"> Animal sitters near you</h1>
            <Stack spacing={4}>
                <Stack direction='column' spacing ={1}>
                <Avatar
                    src='https://st.depositphotos.com/1771835/1477/i/950/depositphotos_14778931-stock-photo-happy-man-thumbs-up-sign.jpg'
                    alt='bret'
                    sx={{ width: 150, height: 150 }}
                    />
                    <Avatar
                    src='https://us.123rf.com/450wm/racorn/racorn1604/racorn160400364/55666240-happy-vivacious-young-businesswoman-posing-against-a-dark-studio-background-with-copy-space-looking-.jpg?ver=6'
                    alt='dave'
                    sx={{ width: 150, height: 150 }}
                    />
                    <Avatar
                    src='https://www.pngitem.com/pimgs/m/9-99609_man-stock-photo-png-transparent-png.png'
                    alt='jess'
                    sx={{ width: 150, height: 150 }}
                    />
                    <Avatar 
                    src='https://static9.depositphotos.com/1060743/1203/i/600/depositphotos_12033497-stock-photo-portrait-of-young-black-man.jpg'
                    alt='sam'
                    sx={{ width: 150, height: 150 }}
                    />
                    <Avatar
                    src='https://st.depositphotos.com/1987395/1947/i/950/depositphotos_19473595-stock-photo-young-casual-business-man.jpg'
                    alt='dave'
                    sx={{ width: 150, height: 150 }}
                    />

                </Stack>
            </Stack>
            </div>

            <div className="bio"> 
            <Stack spacing={10}>
                <Stack direction='column' spacing ={15}>
                <h2 className="ess"> </h2>
                <h2 className="ess"> Brad 25, ★★★★★ Responsible and good with all breads</h2>
            <h3 className="jess"> Jess 31, ★★★★☆ Responsible and good with walks</h3>
            <h4 className="Greg"> Tom 25, ★★★☆☆ Good with Big DOgs!</h4>
            <h5 className="ess"> Steve 25, ★★☆☆☆ Happy to play in the park</h5>
            <h6 className="jess"> Liam 26, ★☆☆☆☆ Loves all dogs!!</h6>
        

                </Stack>
            </Stack>

            </div>
            


        
        </div>
    )
}

export default PetSitter_