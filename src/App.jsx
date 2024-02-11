import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Buttons from '../src/components/Buttons'
import Inputs from '../src/components/Inputs'
import Selects from '../src/components/Selects'
import Tables from '../src/components/Tables'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
         <BrowserRouter>
          
          <Routes>
          
            <Route path='/Buttons' element={<Buttons/>} />
            <Route path='/Inputs' element={<Inputs/>} />
            <Route path='/*' element={<Tables/>} />
            <Route path='/Selects' element={<Selects/>} />
           
          </Routes>
          
        </BrowserRouter>
    </>
  )
}

export default App
