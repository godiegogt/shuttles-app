import React, { useState } from 'react';
import Header from '../layoult/Header/Header';
import Card from '../layoult/Card/Card';
import { Box, TextField, Button } from '@mui/material';

function Main() {
  return (
    <div>
      <Header />
      <Box display={'flex'}  flexDirection={'row'} flexWrap={'wrap'} justifyContent={'flex-start'}>
        <Card 
          placa={"12asdffD"} 
          status={"En Ruta"} 
          from={"Coban"} 
          to={"Carcha"} 
        />
      
        <Card 
          placa={"12asdffD"} 
          status={"En Ruta"} 
          from={"Carcha"} 
          to={"Coban"} 
        />

        <Card 
          placa={"12asdffD"} 
          status={"En Ruta"} 
          from={"Carcha"} 
          to={"Coban"} 
        />

        <Card 
          placa={"12asdffD"} 
          status={"En Ruta"} 
          from={"Carcha"} 
          to={"Coban"} 
        />

      </Box>
      
    </div>
  );
}

export default Main;0
