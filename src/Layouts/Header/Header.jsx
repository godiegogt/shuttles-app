import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import logo from '../Header/img/Logo.png';
import user from '../Header/img/user.jpg';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 1,
        background: 'linear-gradient(50deg,#6EACDA, #03346E )',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography
              variant="h6"
              component="p"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BusliveGt
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="filter" color="inherit">
              <FontAwesomeIcon icon={faFilter} />
            </IconButton>
            {isLoggedIn ? (
              <div>
                <Avatar alt="User" src={user} sx={{ width: 40, height: 40, ml: 2, cursor: 'pointer' }} onClick={handleClick} />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose} sx={{ '&:focus': { backgroundColor: 'transparent',}, '&:hover': { backgroundColor: '#f0f0f0',} }}>
                    <Link to="/dashboard/users" style={{ color: 'black', textDecoration: 'none', padding: '5px 10px' }}>Dashboard</Link>
                  </MenuItem>
                  <MenuItem onClick={() => { handleClose(); handleLogout(); }} sx={{ '&:focus': { backgroundColor: 'transparent',}, '&:hover': { backgroundColor: '#f0f0f0',} }}>
                    <Link to="#" style={{ color: 'black', textDecoration: 'none', padding: '5px 10px' }}>Log Out</Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to="/signin" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>Sign In</Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;