import React from 'react';

const CardUsersAdmin = ({ profilePic, username, email, role }) => {
  return (
    <div style={cardStyle}>
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        style={imageStyle}
      />
      <div style={infoStyle}>
        <h3 style={usernameStyle}>{username}</h3>
        <p style={detailStyle}><strong>Email:</strong> {email}</p>
        <p style={detailStyle}><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: '800px', 
};

const imageStyle = {
  width: '50px', 
  height: '50px',
  borderRadius: '50%',
  marginRight: '20px',
};

const infoStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', 
  width: '100%',
  alignItems: 'center',
};

const usernameStyle = {
  marginRight: '20px',
  flex: 1, 
};

const detailStyle = {
  marginRight: '15px',
  fontSize: '14px',
  color: '#555',
};

export default CardUsersAdmin;
