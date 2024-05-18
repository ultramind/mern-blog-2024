import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

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
    </Routes>
  )
}

export default App
