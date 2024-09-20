import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import Main from './Main';
import Admin from './admin/Admin';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import ShuttlesPage from './admin/AdminPages/ShuttlesPage/ShuttlesPage';
import UsersPage from './admin/AdminPages/UsersPage/UsersPage';

const BaseRouting = () => {

const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" exact element={<Main />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="dashboard"
        >
            <Route path="shuttles" element={<ShuttlesPage />} />
            <Route path="users" element={<UsersPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default BaseRouting