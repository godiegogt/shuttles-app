import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './EditUsersModal.css';

const EditUsersModal = ({ open, handleClose, user, onSave }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (open) {
      setUsername(user?.username || '');
      setEmail(user?.email || '');
      setRole(user?.role || '');
    }
  }, [open, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ ...user, username, email, role });
    handleClose(); 
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      aria-labelledby="edit-user-modal-title"
      aria-describedby="edit-user-modal-description"
    >
      <Box className="modal-container">
        <Typography id="edit-user-modal-title" variant="h6" component="h2" className="modal-title">
          Edit User
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate className="modal-form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Moderator">Moderator</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="SuperAdmin">SuperAdmin</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="modal-button"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUsersModal;
