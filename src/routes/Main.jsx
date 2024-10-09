import React, { useEffect, useState } from 'react';
import Header from '../Layouts/Header/Header';
import Card from '../Layouts/Card/Card';

import { Box, Typography, Skeleton } from '@mui/material';

import useShuttle from '../hooks/useShuttle'; 

import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom'; 

function Main() {
  const { shuttles } = useShuttle();
  const [visibleShuttles, setVisibleShuttles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (shuttles.length > 0) {
      setVisibleShuttles(shuttles.slice(0, 10));
      setLoading(false); 
    } else {
      setLoading(true); 
    }
  }, [shuttles]);

  const fetchMoreData = () => {
    if (visibleShuttles.length >= shuttles.length) {
      setHasMore(false);
      return;
    }
    setVisibleShuttles(shuttles.slice(0, visibleShuttles.length + 10)); 
  };

  const handleCardClick = (shuttleId) => {
    navigate(`/shuttles-info/${shuttleId}`); 
  };

  return (
    <div>
      <Header />
      <InfiniteScroll
        dataLength={visibleShuttles.length}
        next={fetchMoreData}
        hasMore={hasMore}
      > 
      <div>
        <Box 
          display="flex" 
          flexDirection="row" 
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {loading ? (
            Array.from(new Array(10)).map((_, index) => (
              <Box 
                display="flex"
                flexDirection="row" 
                justifyContent="space-evenly"
                flexWrap="wrap"
                marginTop={2}
                key={index} 
                sx={{ 
                  flex: '0 0 calc(25% - 5px)', 
                  '@media (max-width: 600px)': {
                    flex: '1 1 calc(33.333% - 20px)'
                  },
                  '@media (max-width: 400px)': {
                    flex: '1 1 100%', 
                  },
                }}
              >
                <Skeleton 
                  variant="rectangular" 
                  height={140} 
                  width={299} 
                  sx={{ borderRadius: '4px'}} 
                />
                <Box >
                  <Skeleton variant="text" height={24} width="299px" />
                  <Skeleton variant="text" height={32} width="299px" />
                  <Skeleton variant="text" height={68} width="299px" />
                </Box>
              </Box>
            ))
          ) : (
            visibleShuttles.length === 0 ? (
              <Typography variant="body1">No hay buses disponibles. Toca ir a pata </Typography>
            ) : (
              visibleShuttles.map(shuttle => (
                <Box 
                  key={shuttle.id} 
                  onClick={() => handleCardClick(shuttle.id)} 
                  sx={{ 
                    flex: '0 0 calc(25% - 5px)', 
                    '@media (max-width: 600px)': {
                      flex: '1 1 calc(33.333% - 20px)'
                    },
                    '@media (max-width: 400px)': {
                      flex: '1 1 100%', 
                    },
                    cursor: 'pointer' 
                  }}
                >
                  <Card 
                    placa={shuttle.plateNumber} 
                    status={shuttle.currentState} 
                    from={shuttle.origin} 
                    to={shuttle.destination} 
                  />
                </Box>
              ))
            )
          )}
        </Box>
      </div>
      </InfiniteScroll>
    </div>
  );
}

export default Main;

