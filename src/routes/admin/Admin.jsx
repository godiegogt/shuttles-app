import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../layoult/Header/Header';
import Sidebar from '../../layoult/Sidebar/Sidebar';
import Users from './AdminPages/Users';
import Shuttles from './AdminPages/Shuttles';
import './Admin.css'

const Admin = () => {
    return (
      <Router>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
  
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
  
            <div style={{ flex: 1, padding: '1rem' }}>
              <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/shuttles" element={<Shuttles />} />
                <Route path="/" element={<Users />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  };
  
  export default Admin;
