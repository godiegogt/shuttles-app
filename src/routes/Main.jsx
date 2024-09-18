import React, { useState } from 'react';
import Header from '../layoult/Header/Header';
import Card from '../layoult/Card/Card';
import { Box, TextField, Button } from '@mui/material';

function Main() {
  // Estado para los valores dinámicos
  const [placa, setPlaca] = useState("123BCfD");
  const [status, setStatus] = useState("En Ruta");
  const [from, setFrom] = useState("Coban");
  const [to, setTo] = useState("Carcha");
  const [estimatedTime, setEstimatedTime] = useState(90);

  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
        <Card 
          placa={placa} 
          status={status} 
          from={from} 
          to={to} 
          estimatedTime={estimatedTime} 
        />
      </Box>
    </div>
  );
}

export default Main;0
