import React from 'react';
import UserCard from '../../../Components/CardUsersAdmin/CardUsersAdmin';

const Users = () => {
  const usersData = [
    {
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      role: 'Admin',
    },
    {
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
      username: 'JaneDoe',
      email: 'janedoe@example.com',
      role: 'User',
    },
    {
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
      username: 'MikeSmith',
      email: 'mikesmith@example.com',
      role: 'Moderator',
    },
  ];

  return (
    <div style={usersContainerStyle}>
      {usersData.map((user, index) => (
        <UserCard
          key={index}
          profilePic={user.profilePic}
          username={user.username}
          email={user.email}
          role={user.role}
        />
      ))}
    </div>
  );
};

const usersContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

export default Users;
