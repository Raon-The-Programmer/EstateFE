import { useState } from 'react'
import './layout.scss'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <Navbar/>
    </div>
  )
}

export default App
