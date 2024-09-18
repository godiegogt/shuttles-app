import { useState } from 'react'
import './App.css'
import './routes/Main'
import Main from './routes/Main'
import Admin from './routes/admin/Admin'
import SignIn from './routes/signIn/SignIn'
import { createBrowserRouter } from 'react-router-dom'
import BaseRouting from './routes/BaseRouting'

function App() {


  return (
   <BaseRouting/>
  )
}

export default App
