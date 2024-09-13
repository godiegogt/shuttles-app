import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignUp.css'; // Import the CSS file

const SignUpModal = ({ open, handleClose }) => {
  const [username, setUsername] = useState(''); // State for Username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-up-modal-title"
      aria-describedby="sign-up-modal-description"
    >
      <Box className="modal-container">
        {/* Modal Title */}
        <Typography id="sign-up-modal-title" variant="h6" component="h2" className="modal-title">
          Sign Up
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate className="modal-form">
          
          {/* Username Input */}
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

          {/* Email Input */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="modal-button"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
