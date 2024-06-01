import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPost from './pages/AddPost'
import Home from './pages/Home'
import Profile from './pages/Profile'
import 'react-loading-skeleton/dist/skeleton.css'
import PostDetails from './pages/PostDetails'
import PostByCategory from './pages/PostByCategory'
import ProtectedRoute from './utils/ProtectedRoute'
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/post/:slug' element={<PostDetails />} />
      <Route path='/posts/category' element={<PostByCategory />} />
      {/* <Route path='/posts' element={<PostByCategory />} /> */}
      {/* Protected route */}
      <Route element={<ProtectedRoute />}>
        <Route
          path='/add-post'
          element={
            <Layout>
              <AddPost />
            </Layout>
          }
        />
        <Route
          path='/post/:slug/edit'
          element={
            <Layout>
              <EditPost />
            </Layout>
          }
        />
        <Route
          path='/profile'
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
