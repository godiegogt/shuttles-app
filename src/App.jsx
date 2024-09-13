import { useState } from 'react'
import './App.css'
import './routes/Main'
import Main from './routes/Main'
import Admin from './routes/admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Admin/>
  )
}

export default App
