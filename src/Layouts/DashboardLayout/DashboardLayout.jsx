import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
const DashboardLayout = ({children}) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />

    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar />

      <div style={{ flex: 1, padding: '1rem' }}>
{
    children
}

    </div>
  </div>
</div>
  )
}

export default DashboardLayout
