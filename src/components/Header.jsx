import React, { Fragment } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

import './Header.css';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <Fragment>
      <div className='header'>
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
        <img
          className='header__logo'
          src='https://media.designrush.com/inspiration_images/136074/conversions/_1513706351_928_tinder1_bacbf6370ec8-desktop.jpg'
          alt='tinder logo'
        />
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
