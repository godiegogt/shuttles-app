import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import logo from '../Header/img/Logo.png';
import user from '../Header/img/user.jpg';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import useMediaQuery from '@mui/material/useMediaQuery';

function ResponsiveAppBar() {
  const isSmallScreen = useMediaQuery('(max-width: 360px) and (max-height: 724px)');

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
            {isSmallScreen ? (
              <IconButton aria-label="menu" color="inherit">
                <DensityMediumIcon />
              </IconButton>
            ) : (
              <>
                <IconButton aria-label="filter" color="inherit">
                  <FontAwesomeIcon icon={faFilter} />
                </IconButton>
                <Avatar alt="User" src={user} sx={{ width: 40, height: 40, ml: 2 }} />
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
