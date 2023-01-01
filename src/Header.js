import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className='header'>
     {backButton ? (
      <IconButton onClick={() => navigate(backButton)}>
      <ArrowBackIosIcon className='header-icon' fontSize='large'/>
      </IconButton> 
     ) : (
      <Link to='/profile'>
      <IconButton>
      <PersonIcon className='header-icon' fontSize='large'/>
      </IconButton>
      </Link>
     )}

       <Link to='/'>
       <img 
       className='header-img' 
       src= 'https://www.seekpng.com/png/detail/26-265409_cat-paw-print-pink.png'
       alt=''
       />
       </Link>
       
       {backButton ? (
          <IconButton onClick={() => navigate(backButton)}>
          <ArrowForwardIosIcon className='header-icon' fontSize='large'/>
          </IconButton>
       ) : (
      <Link to='/chat'>
       <IconButton>
       <ForumIcon className='header-icon' fontSize='large'/>
       </IconButton>
       </Link>
       )}


    </div>
  )
}

export default Header;