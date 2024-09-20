import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import bus from '../Card/img/bus.jpeg';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EastIcon from '@mui/icons-material/East';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomCard = ({ placa, status, from, to, estimatedTime }) => {
  const [startTime, setStartTime] = useState(null); 
  const [elapsedTime, setElapsedTime] = useState(0); 
  const [arrivalTime, setArrivalTime] = useState(''); 
  
  // Detect screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjust for small screens

  const startRoute = () => {
    const currentTime = new Date();
    setStartTime(currentTime);

    const estimatedArrival = new Date(currentTime.getTime() + estimatedTime * 60000); 
    setArrivalTime(estimatedArrival.toLocaleTimeString());

    const interval = setInterval(() => {
      const now = new Date();
      const timeElapsed = Math.floor((now - currentTime) / 60000); 
      setElapsedTime(timeElapsed);
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (status === "En Ruta") {
      startRoute();
    }
  }, [status]);

  return (
    <Card sx={{ 
        maxWidth: isSmallScreen ? 240 : 290, // Adjust card width for small screens
        margin: '20px', 
        backgroundColor: '#ffff' 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bus}
          alt="bus"
        />
        <CardContent>
          
          <Typography gutterBottom variant="body1" component="div" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              justifyContent: 'space-between', 
              fontSize: isSmallScreen ? '0.8rem' : '1rem' // Adjust font size
            }}
          >
            <div>{`Placa: ${placa}`}</div>
            <div>{status}</div>
          </Typography>
          <hr />

          <Typography gutterBottom variant="h6" component="div" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              justifyContent: 'center', 
              fontSize: isSmallScreen ? '0.9rem' : '1.2rem' // Adjust font size
            }}
          >
            <span>{from}</span>
            <EastIcon />
            <DirectionsBusIcon />
            <EastIcon />
            <span>{to}</span>
          </Typography>
          <hr />

          <Typography gutterBottom variant="body2" component="div" 
            sx={{ 
              display: 'flex', 
              flexDirection: isSmallScreen ? 'column' : 'row', // Stack elements vertically on small screens
              alignItems: 'center',
              gap: 2, 
              justifyContent: 'center',
              fontSize: isSmallScreen ? '0.7rem' : '0.9rem' // Adjust font size
            }}
            style={{ textAlign: 'center' }}
          >
            <div>
              <p>Salió:</p>
              {`${startTime ? startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}`}
            </div>
            <div>
              <p>Tiempo desde que salió:</p>
              {`${elapsedTime} mins`}
            </div>
            <div>
              <p>Llegará:</p>
              {` ${arrivalTime}`}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;




  