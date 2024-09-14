import { useState } from 'react'
import './App.css'
import './routes/Main'
import Main from './routes/Main'
import Admin from './routes/admin/Admin'
import SignIn from './routes/signIn/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
   <SignIn/>
  )
}

export default App
