import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './CardShuttlesAdmin.css';

const CardShuttlesAdmin = ({ plateNumber, currentState, origin, destination, onDelete, onEdit }) => {
  return (
    <div className="card">
      <div className="info-container">
        <div className="text-info">
          <div className="info-item"><strong>Plate Number:</strong> <span className="info-value">{plateNumber}</span></div>
          <div className="info-item"><strong>Status:</strong> <span className="info-value">{currentState}</span></div>
          <div className="info-item"><strong>Origin:</strong> <span className="info-value">{origin}</span></div>
          <div className="info-item"><strong>Destination:</strong> <span className="info-value">{destination}</span></div>
        </div>
        <div className="button-container">
          <button className="button-icon edit-icon" onClick={onEdit}>
            <FaEdit className="icon" />
          </button>
          <button className="button-icon delete-icon" onClick={onDelete}>
            <FaTrash className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardShuttlesAdmin;
