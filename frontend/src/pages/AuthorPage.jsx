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

const AuthorPage = () => {
  const { author } = useParams()
  const [query, setQuery] = useState({
    category: '',
    search: '',
    page: 1,
    limit: 10,
    sort: 'desc',
    status: 'published',
    author: author || ''
  })
  const { data, isLoading, isSuccess } = useGetAllPostsQuery(query)
  const { data: user, isLoading: userLoad } = useGetUserQuery(author)

  return (
    <Layout>
      <div
        className={{ display: 'flex', flexDirection: 'column', gap: '100px' }}
      >
        <section
          className='page-title page-title-center'
          style={{ marginBottom: '50px' }}
        >
          <div className='container'>
            <div className='page-title-row p-4'>
              <div
                id='comment-1'
                className='comment-wrap'
                style={{
                  position: 'relative',
                  border: '3px solid white',
                  borderRadius: '20px',
                  padding: 10,
                  width: '80%'
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
                            {user?.stack || <Skeleton />}
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
        </section>

        <section id='content'>
          <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
            <div className='container'>
              <div className='row border-between'>
                {/* category list */}
                <CategoryList
                  isLoading={isLoading}
                  query={query}
                  setQuery={setQuery}
                />
                {/* All posts */}
                <Posts
                  posts={data?.posts}
                  isLoading={isLoading}
                  query={query}
                  setQuery={setQuery}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AuthorPage
