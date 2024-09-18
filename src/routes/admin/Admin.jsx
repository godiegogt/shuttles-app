import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './AdminPages/UsersPage/UsersPage';
import Shuttles from './AdminPages/ShuttlesPage/ShuttlesPage';
import './Admin.css'
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';


const Admin = () => {
    return (
    
             <DashboardLayout>
               <Routes>
                <Route path="/"  element={<Users />} />
                <Route path="shuttles" element={<Shuttles />} />
                <Route path="users" element={<Users />} />
              </Routes>
             </DashboardLayout>

   
    );
  };
  
  export default Admin;
