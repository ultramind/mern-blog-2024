import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileCardMin = () => {
  const { userInfo: user } = useSelector(state => state.auth)
  return (
    <div className='position-sticky h-100 page-title page-title-center'>
      <div className='container'>
        <div className=''>
          <div
            id='comment-1'
            className='comment-wrap'
            style={{
              position: 'relative',
              border: '3px solid white',
              borderRadius: '20px',
              padding: 10,
              width: '100%'
            }}
          >
            <div
              className='comment-meta'
              style={{
                position: 'absolute',
                top: -80,
                left: '48%'
              }}
            >
              <div className='comment-author vcard'>
                <span
                  className='comment-avatar'
                  style={{
                    width: '80px',
                    height: '80px'
                  }}
                >
                  <img
                    alt=''
                    src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60'
                    className='avatar avatar-0 photo avatar-default'
                    style={{ width: '100%' }}
                  />
                </span>
              </div>
            </div>
            <div style={{ paddingTop: 30 }}>
              <div
                className='entry-meta'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10
                }}
              >
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                  <li>
                    <b>
                      <Link to={`/post/author/${user?.id}`}>
                        {user?.stack || <Skeleton />}
                      </Link>
                    </b>
                  </li>
                  <li>
                    <b>
                      <Link to={`/post/author/${user?.id}`}>
                        {user?.firstname || <Skeleton />} {user?.lastname}
                      </Link>
                    </b>
                  </li>
                  <li>
                    <b>
                      <Link to={`/post/author/${user?.id}`}>
                        {user?.email || <Skeleton />}
                      </Link>
                    </b>
                  </li>
                  <li>
                    <b>
                      <Link to={`/post/author/${user?.id}`}>
                        https://github.com/ultramind
                      </Link>
                    </b>
                  </li>
                  <li>
                    <b>
                      <Link to={`/post/author/${user?.id}`}>
                        https://akachukwu-nextjs-portfolio-avbb71wms.vercel.app/
                      </Link>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
            <div className='clear'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardMin
