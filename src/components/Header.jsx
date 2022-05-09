import React, { Fragment } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import './Header.css';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Header({ backButton }) {
  const currentPath = useLocation();
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className='header'>
        {currentPath.pathname === '/chat' ? (
          <IconButton onClick={() => navigate(`${backButton}`)}>
            <ArrowBackIosIcon
              className='header__icon'
              fontSize='large'
            ></ArrowBackIosIcon>
          </IconButton>
        ) : (
          <IconButton>
            <PersonIcon className='header__icon' fontSize='large' />
          </IconButton>
        )}

        <Link to='/'>
          <img
            className='header__logo'
            src='https://media.designrush.com/inspiration_images/136074/conversions/_1513706351_928_tinder1_bacbf6370ec8-desktop.jpg'
            alt='tinder logo'
          />
        </Link>
        <Link to='/chat'>
          <IconButton>
            <ForumIcon className='header__icon' fontSize='large' />
          </IconButton>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
