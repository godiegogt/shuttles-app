import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import bus from '../Card/img/bus.jpeg';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EastIcon from '@mui/icons-material/East';

const CustomCard = ({ placa, status, from, to, estimatedTime }) => {
  const [startTime, setStartTime] = useState(null); // Guardar la hora de salida
  const [elapsedTime, setElapsedTime] = useState(0); // Tiempo transcurrido
  const [arrivalTime, setArrivalTime] = useState(''); // Hora estimada de llegada

  // Función que se ejecuta al iniciar la ruta
  const startRoute = () => {
    const currentTime = new Date();
    setStartTime(currentTime);

    // Calculamos el tiempo estimado de llegada
    const estimatedArrival = new Date(currentTime.getTime() + estimatedTime * 60000); // estimatedTime está en minutos
    setArrivalTime(estimatedArrival.toLocaleTimeString());

    // Iniciar el contador de tiempo transcurrido
    const interval = setInterval(() => {
      const now = new Date();
      const timeElapsed = Math.floor((now - currentTime) / 60000); // Tiempo en minutos
      setElapsedTime(timeElapsed);
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
  };

  useEffect(() => {
    if (status === "En Ruta") {
      startRoute();
    }
  }, [status]);

  return (
    <Card sx={{ maxWidth: 310, margin: '10px', backgroundColor: '#ffff' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bus}
          alt="bus"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'space-between' }}>
            <div>{`Placa: ${placa}`}</div>
            <div>{status}</div>
          </Typography>
          <hr />

          <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
            <span>{from}</span>
            <EastIcon />
            <DirectionsBusIcon />
            <EastIcon />
            <span>{to}</span>
          </Typography>
          <hr />

          
          <Typography gutterBottom variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
            <p>{`Salió: ${startTime ? startTime.toLocaleTimeString() : 'N/A'}`}</p>
            
            <p>{`Tiempo desde la salida: ${elapsedTime} mins`}</p>
            
            <p>{`Llegará: ${arrivalTime}`}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;





  