import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import SignIn from './components/SignIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className='h-full'>
      <SignIn/>
    </body>
  )
}

export default App
