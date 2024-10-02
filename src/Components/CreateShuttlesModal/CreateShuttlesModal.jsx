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
import './CreateShuttlesModal.css';

const CreateShuttlesModal = ({ open, handleClose, onSave }) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    if (open) {
      setPlateNumber('');
      setCurrentState('');
      setOrigin('');
      setDestination('');
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (plateNumber && currentState && origin && destination) {
      onSave({ plateNumber, currentState, origin, destination });
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-shuttle-modal-title"
      aria-describedby="create-shuttle-modal-description"
    >
      <Box className="modal-container">
        <Typography id="create-shuttle-modal-title" variant="h6" component="h2" className="modal-title">
          Create Shuttle
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate className="modal-form">
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="plateNumber"
            label="Plate Number"
            name="plateNumber"
            autoComplete="plateNumber"
            autoFocus
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="current-state-label">Current State</InputLabel>
            <Select
              labelId="current-state-label"
              id="currentState"
              value={currentState}
              onChange={(e) => setCurrentState(e.target.value)}
              label="Current State"
            >
              <MenuItem value="In Route">In Route</MenuItem>
              <MenuItem value="Boarding">Boarding</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            id="origin"
            label="Origin"
            name="origin"
            autoComplete="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="destination"
            label="Destination"
            name="destination"
            autoComplete="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="modal-button"
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateShuttlesModal;
