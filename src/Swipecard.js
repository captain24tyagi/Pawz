import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './Swipecard.css';

function Swipecard() {
  return (
    <div className='swipecards'>
       <IconButton>
         <CloseIcon fontSize='large' className='close'/> 
       </IconButton>
       <IconButton>
         <PetsIcon fontSize='large' className='pets'/>
       </IconButton>
       <IconButton>
         <FavoriteIcon fontSize='large' className='fav'/> 
       </IconButton>
       <IconButton>
         <FlashOnIcon fontSize='large' className='flash'/>
       </IconButton>
    </div>
  )
}

export default Swipecard