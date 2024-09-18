import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './CardUsersAdmin.css';

const CardUsersAdmin = ({ profilePic, username, email, role, onDelete, onEdit }) => {
  return (
    <div className="card">
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        className="profile-pic"
      />
      <div className="info-container">
        <div className="text-info">
          <div className="info-item"><strong>Username:</strong> <span className="info-value">{username}</span></div>
          <div className="info-item"><strong>Email:</strong> <span className="info-value">{email}</span></div>
          <div className="info-item"><strong>Role:</strong> <span className="info-value">{role}</span></div>
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

export default CardUsersAdmin;
