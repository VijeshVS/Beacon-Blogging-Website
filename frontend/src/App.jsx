import { Test } from './pages/test'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/test' element={<Test/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
