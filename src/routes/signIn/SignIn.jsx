import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Logo from '../signIn/src/Logo_withName.png';
import SignUpModal from '../../components/SignUp/SignUp';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password });
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className="signInContainer">
      <Box className="formContainer">
        <Box className="logoBox">
          <img src={Logo} alt="Logo" className="logo" />
        </Box>
        <Typography component="h1" variant="h5" className="signInTitle">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate className="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box className="rememberForgotBox">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              className="rememberMe"
            />
            <Link href="#" variant="body2" className="link forgotPassword">
              Forgot password?
            </Link>
          </Box>
          <Button type="submit" fullWidth variant="contained" className="signInButton">
            Sign In
          </Button>
          <Box className="SignUpBox">
            <Link href="#" variant="body2" onClick={handleOpenModal} className='link'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Box>
      <SignUpModal open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
};

export default SignIn;
