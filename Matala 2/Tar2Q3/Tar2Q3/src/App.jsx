import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCTable from '../CC/CCTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CCTable></CCTable>
    </>
  )
}

export default App
