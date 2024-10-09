import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../Layouts/Header/Header';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import useShuttle from '../../hooks/useShuttle';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ShuttlesInfo = () => {
  const { shuttleId } = useParams(); 
  const { shuttles } = useShuttle();
  const [shuttleInfo, setShuttleInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const foundShuttle = shuttles.find((shuttle) => shuttle.id === shuttleId);
    if (foundShuttle) {
      setShuttleInfo(foundShuttle);
    }
    setLoading(false);
  }, [shuttles, shuttleId]);

  if (loading) {
    return (
      <Box sx={{ padding: 2 }}>
        <Header />
        <CircularProgress />
      </Box>
    );
  }

  if (!shuttleInfo) {
    return (
      <Box>
        <Typography variant="h6">No se encontró información del bus.</Typography>
        <button onClick={() => navigate('/main')}>Regresar</button>
      </Box>
    );
  }

  return (
    <div>
      <Header />

      {/* Carrusel para las imágenes */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://i.ytimg.com/vi/HL45VnBFJ-M/hqdefault.jpg"
              className="d-block w-100"
              alt="Primera diapositiva"
              style={{ height: '300px', objectFit: 'cover' }} 
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://www.sicultura.gob.gt/wp-content/uploads/2021/11/6-3.jpg"
              className="d-block w-100"
              alt="Segunda diapositiva"
              style={{ height: '300px', objectFit: 'cover' }} 
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.sicultura.gob.gt/wp-content/uploads/2021/11/Indu1.jpg"
              className="d-block w-100"
              alt="Tercera diapositiva"
              style={{ height: '300px', objectFit: 'cover' }} 
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* información */}
      <Box sx={{ padding: 2 }}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Información del Bus
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {`Placa: ${shuttleInfo.plateNumber}`}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {`Estado: ${shuttleInfo.currentState}`}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {`De: ${shuttleInfo.origin}`}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {`A: ${shuttleInfo.destination}`}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            {`Hora de salida: ${shuttleInfo.departureTime}`}
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default ShuttlesInfo;
