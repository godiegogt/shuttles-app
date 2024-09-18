import React, { useState } from 'react';
import CardUsersAdmin from '../../../../Components/CardUsersAdmin/CardUsersAdmin';
import EditUsersModal from '../../../../Components/EditUsersModal/EditUsersModal';
import CreateUsersModal from '../../../../Components/CreateUsersModal/CreateUsersModal';
import './UsersPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCheck } from '@fortawesome/free-solid-svg-icons';
import DashboardLayout from '../../../../Layouts/DashboardLayout/DashboardLayout';

const UsersPage = () => {
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
      username: 'JaneDoe',
      email: 'janedoe@example.com',
      role: 'User',
    },
    {
      id: 3,
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
      username: 'MikeSmith',
      email: 'mikesmith@example.com',
      role: 'Moderator',
    },
  ]);
  

  const [editUser, setEditUser] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false); 
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('email'); 

  const filteredUsers = usersData.filter(user => {
    const roleMatch = selectedRole === 'All Roles' || user.role === selectedRole;
    return user[searchBy].toLowerCase().includes(searchQuery.toLowerCase()) && roleMatch;
  });

  const handleDelete = (id) => {
    setUsersData(usersData.filter(user => user.id !== id));
  };
  
  const handleEdit = (user) => {
    setEditUser(user);
    setEditModalOpen(true);
  };  

  const handleSaveEdit = (updatedUser) => {
    setUsersData(usersData.map(user => user.id === updatedUser.id ? updatedUser : user));
    setEditUser(null);
    setEditModalOpen(false);
  };
  
  const handleCreate = (newUser) => {
    setUsersData([...usersData, newUser]);
    setCreateModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleFilterButtonClick = () => {
    setFilterDropdownOpen(!filterDropdownOpen); 
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFilterDropdownOpen(false); 
  };

  return (
   <DashboardLayout>
     <div className="users-page-container">
      <div className="top-bar">
        <div className="search-filter-group">
          <select 
            className="filter-dropdown" 
            value={searchBy} 
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="username">Username</option>
          </select>
          <input 
            type="text" 
            placeholder="Search users..." 
            className="search-bar" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="filter-button" onClick={handleFilterButtonClick}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div className={`role-dropdown ${filterDropdownOpen ? 'show' : ''}`}>
            {['All Roles', 'User', 'Moderator', 'Admin', 'SuperAdmin'].map((role) => (
              <div
                key={role}
                className={`role-option ${role === selectedRole ? 'selected' : ''}`}
                onClick={() => handleRoleSelect(role)}
              >
                {role}
                {role === selectedRole && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
              </div>
            ))}
          </div>
          <button
            className="create-user-button"
            onClick={() => setCreateModalOpen(true)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cards-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <CardUsersAdmin
              key={index}
              profilePic={user.profilePic}
              username={user.username}
              email={user.email}
              role={user.role}
              onDelete={() => handleDelete(user.id)}
              onEdit={() => handleEdit(user)}
            />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <CreateUsersModal 
        open={createModalOpen} 
        handleClose={() => setCreateModalOpen(false)}
        onSave={handleCreate}
      />

      <EditUsersModal 
        open={editModalOpen} 
        handleClose={handleCloseEditModal}
        user={editUser}
        onSave={handleSaveEdit}
      />
    </div>
    
   </DashboardLayout>
  );
};

export default UsersPage;
