import React, { useEffect, useState } from 'react';
import CardShuttlesAdmin from '../../../../Components/CardShuttlesAdmin/CardShuttlesAdmin';
import EditShuttlesModal from '../../../../Components/EditShuttlesModal/EditShuttlesModal';
import CreateShuttlesModal from '../../../../Components/CreateShuttlesModal/CreateShuttlesModal';
import './ShuttlesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCheck } from '@fortawesome/free-solid-svg-icons';
import DashboardLayout from '../../../../Layouts/DashboardLayout/DashboardLayout';
import useShuttle from '../../../../hooks/useShuttle';

import { onValue, ref, update, remove } from 'firebase/database';


const ShuttlesPage = () => {


  const [editShuttle, setEditShuttle] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('All States');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('plateNumber');

  //HOOKS
  const {addShuttle,database,shuttles} = useShuttle();

  //EFFECTS

  




  const filteredShuttles = shuttles.filter(shuttle => {
    const stateMatch = selectedState === 'All States' || shuttle.currentState === selectedState;
    return shuttle[searchBy].toLowerCase().includes(searchQuery.toLowerCase()) && stateMatch;
  });

  const handleDelete = (id) => {
    const shuttleRef = ref(database, `shuttles/${id}`);
    
    remove(shuttleRef)
      .catch((error) => {
        console.error("Error deleting shuttle:", error);
      });
  };

  const handleEdit = (shuttle) => {
    setEditShuttle(shuttle);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedShuttle) => {
    const shuttleRef = ref(database, `shuttles/${updatedShuttle.id}`);
    update(shuttleRef, {
        plateNumber: updatedShuttle.plateNumber,
        currentState: updatedShuttle.currentState,
        origin: updatedShuttle.origin,
        destination: updatedShuttle.destination,
    })
    .then(() => {
        setEditShuttle(null);
        setEditModalOpen(false);
    })
    .catch((error) => {
        console.error("Error updating shuttle: ", error);
    });
};

  const handleCreate = (newShuttle) => {
   // setShuttlesData([...shuttlesData, newShuttle]);
   addShuttle(newShuttle)
    setCreateModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleFilterButtonClick = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setFilterDropdownOpen(false);
  };




  return (
<DashboardLayout>
<div className="shuttles-page-container">
      <div className="top-bar">
        <div className="search-filter-group">
          <select 
            className="filter-dropdown" 
            value={searchBy} 
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="plateNumber">Plate</option>
            <option value="origin">Origin</option>
            <option value="destination">Destination</option>
          </select>
          <input 
            type="text" 
            placeholder="Search shuttles..." 
            className="search-bar" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="filter-button" onClick={handleFilterButtonClick}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div className={`state-dropdown ${filterDropdownOpen ? 'show' : ''}`}>
            {['All States', 'In Route', 'Boarding'].map((state) => (
              <div
                key={state}
                className={`state-option ${state === selectedState ? 'selected' : ''}`}
                onClick={() => handleStateSelect(state)}
              >
                {state}
                {state === selectedState && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
              </div>
            ))}
          </div>
          <button
            className="create-shuttle-button"
            onClick={() => setCreateModalOpen(true)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cards-container">
        {filteredShuttles.length > 0 ? (
          filteredShuttles.map((shuttle, index) => (
            <CardShuttlesAdmin
              key={index}
              plateNumber={shuttle.plateNumber}
              currentState={shuttle.currentState}
              origin={shuttle.origin}
              destination={shuttle.destination}
              onDelete={() => handleDelete(shuttle.id)}
              onEdit={() => handleEdit(shuttle)}
            />
          ))
        ) : (
          <p>No Shuttles found.</p>
        )}
      </div>

      <CreateShuttlesModal 
        open={createModalOpen} 
        handleClose={() => setCreateModalOpen(false)}
        onSave={handleCreate}
      />

      <EditShuttlesModal 
        open={editModalOpen} 
        handleClose={handleCloseEditModal}
        shuttle={editShuttle}
        onSave={handleSaveEdit}
      />
    </div>
</DashboardLayout>
  );
};

export default ShuttlesPage;
