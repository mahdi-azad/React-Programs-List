import { useState } from 'react'
import Program from './components/Program'
import '../src/styles/program.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Program></Program>
      </div>
    </>
  )
}

export default App
