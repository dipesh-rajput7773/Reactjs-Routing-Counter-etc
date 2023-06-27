import React from 'react'
import Navbar from "./Nav"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Main"
import About from "./About"
import Blog from "./Blog"
import Contact from './Contact'
import SingleBlog from "./SpBlog"
import NotFound from "./NotFound"
import BlogPerent from "./BlogParent"
import './routing.css'

function Home() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<BlogPerent />} >
            <Route index element={<Blog />} />
            <Route path=':id' element={<SingleBlog />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path=':id' element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Home