import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Aside from '../components/Aside'
import Subscribe from '../components/Subscribe'
import Posts from '../components/postContainer/Posts'
import CategoryList from '../components/postContainer/CategoryList'
import Skeleton from 'react-loading-skeleton'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'
import HeroSkeleton from '../components/SkeletonsLoaders/HeroSkeleton'
import Layout from '../Layout'
import { Link, useParams } from 'react-router-dom'
import { useGetUserQuery } from '../redux/slices/userApiSlice'
import { useSelector } from 'react-redux'
import ProfileCard from '../components/ProfileCard'
import ProfileCardMin from '../components/ProfileCardMin'
import UpdateProfile from '../components/UpdateProfile'

const Profile = () => {
  return (
    <Layout>
      <div
        className={{ display: 'flex', flexDirection: 'column', gap: '100px' }}
      >
        <section id='content'>
          <div className='content-wrap pt-0 pt-sm-6'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-4 cat-widgets position-sticky'
                  style={{ top: '234px' }}
                >
                  <ProfileCardMin />
                </div>

                <div className='col-lg-8'>
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Profile
