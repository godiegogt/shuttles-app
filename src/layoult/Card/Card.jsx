import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import bus from '../Card/img/bus.jpeg'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EastIcon from '@mui/icons-material/East';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', backgroundColor: '#ffff'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bus}
          alt="bus"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 15, justifyContent:'spaceBetween' }}>   
            <div>Placa = 123BCD</div>
            <div>En Ruta</div>
          </Typography>
          <hr />
          <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap:2,  justifyContent:'center' }}>   
            <span>Coban</span>
            <EastIcon/>
            <DirectionsBusIcon />
            <EastIcon/> 
            <span>Carcha</span>
          </Typography>
          <hr/>
          <Typography gutterBottom variant="h9" component="div" sx={{ display: 'flex', alignItems: 'center', gap:4,  justifyContent:'center' }}>   
            <p>Salio</p>
            <p>Teimpo des de la salida</p>
            <p>llegara </p>
          </Typography>

          
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;







  