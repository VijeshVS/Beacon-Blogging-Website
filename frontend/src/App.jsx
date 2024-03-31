import { Test } from './pages/test'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { BlogPage } from './pages/BlogPage'
import { Homepage } from './pages/HomePage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/test' element={<Test/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
