import React, { useEffect, useState } from 'react';
import Header from '../Layouts/Header/Header';
import Card from '../Layouts/Card/Card';
import { Box } from '@mui/material';
import useShuttle from '../hooks/useShuttle'; // Ensure the path is correct
import InfiniteScroll from 'react-infinite-scroll-component';

function Main() {
  const { shuttles } = useShuttle();
  const [visibleShuttles, setVisibleShuttles] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Initially load a certain number of shuttles
    setVisibleShuttles(shuttles.slice(0, 10)); // Adjust the number as needed
  }, [shuttles]);

  const fetchMoreData = () => {
    if (visibleShuttles.length >= shuttles.length) {
      setHasMore(false);
      return;
    }
    
    // Load more shuttles
    setVisibleShuttles(shuttles.slice(0, visibleShuttles.length + 10)); // Load 10 more
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
