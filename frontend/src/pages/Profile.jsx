import React from 'react'
import { useGetUserQuery } from '../redux/slices/userApiSlice'

const Profile = () => {
  const { data } = useGetUserQuery()
  console.log(data)
  return <div>Profile</div>
}

export default Profile
