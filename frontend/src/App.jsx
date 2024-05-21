import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPost from './pages/AddPost'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <div>App</div>
          </Layout>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      ;
      <Route
        path='/add-post'
        element={
          <Layout>
            <AddPost />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
