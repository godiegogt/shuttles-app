import { useState } from 'react'
import './App.css'
import './routes/Main'
import Main from './routes/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Main/>
  )
}

export default App
