import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

const ProfileCard = () => {
  const { userInfo } = useSelector(state => state.auth)

  return (
    <div
      className='col-lg-4 cat-widgets position-sticky h-100'
      style={{ top: '234px' }}
    >
      <div className='widget widget-nav mt-md-5'>
        <h2>Profile</h2>
      </div>
    </div>
  )
}

export default ProfileCard
