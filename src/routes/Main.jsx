import React, { useEffect, useState } from 'react';
import Header from '../Layouts/Header/Header';
import Card from '../Layouts/Card/Card';
import { Box } from '@mui/material';
import useShuttle from '../hooks/useShuttle'; 
import InfiniteScroll from 'react-infinite-scroll-component';

function Main() {
  const { shuttles } = useShuttle();
  const [visibleShuttles, setVisibleShuttles] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    
    setVisibleShuttles(shuttles.slice(0, 10)); 
  }, [shuttles]);

  const fetchMoreData = () => {
    if (visibleShuttles.length >= shuttles.length) {
      setHasMore(false);
      return;
    }
    
    
    setVisibleShuttles(shuttles.slice(0, visibleShuttles.length + 10)); 
  };

  return (
    <div>
      <Header />
      <InfiniteScroll
        dataLength={visibleShuttles.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'flex-start'}>
          {visibleShuttles.length === 0 ? (
            <p>No hay shuttles disponibles.</p>
          ) : (
            visibleShuttles.map(shuttle => (
              <Card 
                key={shuttle.id} 
                placa={shuttle.plateNumber} 
                status={shuttle.currentState} 
                from={shuttle.origin} 
                to={shuttle.destination} 
              />
            ))
          )}
        </Box>
      </InfiniteScroll>
    </div>
  );
}

export default Main;
