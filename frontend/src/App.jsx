import { Test } from './pages/test'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { BlogPage } from './pages/BlogPage'
import { Homepage } from './pages/HomePage'
import { CreateBlogPost } from './pages/CreateBlogPage'
import { Feed } from './pages/Feed'
import { UpdateBlogPage } from './pages/UpdateBlogPage'
import { UpdateUserPage } from './pages/UpdateUserPage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/test' element={<Test/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/newblog' element={<CreateBlogPost/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/updateblog' element={<UpdateBlogPage/>}/>
        <Route path='/updateuser' element={<UpdateUserPage/>}/>

      </Routes>
      </BrowserRouter>
  )
}

export default App
