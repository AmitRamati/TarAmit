import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CComp from '../CC/CComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CComp></CComp>
    </>
  )
}

export default App
