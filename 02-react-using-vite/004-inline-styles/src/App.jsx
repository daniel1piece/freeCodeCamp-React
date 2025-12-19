import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Button from './components/Button'
import Button2 from './components/Button2'
import DynamicButton from './components/DynamicButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Footer /> */}
      <Button buttonText={'Enviar'} />
      <Button2 buttonText={'Borrar'} />
      <DynamicButton buttonText={"Login"} isActive={true} />
    </>
  )
}

export default App
