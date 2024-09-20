import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaShuttleVan } from 'react-icons/fa';
import './Sidebar.css'; 

const Sidebar = () => {
  const location = useLocation();

  return (
    <div style={{
      width: '250px', 
      background: '#fff', 
      height: '100%', 
      margin: '10px 0', 
      borderRadius: '0 10px 0 0', 
      padding: '0.5rem 1rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2>Admin</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
         <li>
          <Link to="/dashboard/users" className={`sidebar-link ${location.pathname === '/dashboard/users' ? 'active' : ''}`}>
            <FaUsers className="sidebar-icon" />
            Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/shuttles" className={`sidebar-link ${location.pathname === '/dashboard/shuttles' ? 'active' : ''}`}>
            <FaShuttleVan className="sidebar-icon" />
            Shuttles
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
