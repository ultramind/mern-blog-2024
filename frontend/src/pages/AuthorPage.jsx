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
import { useParams } from 'react-router-dom'

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
  const newPosts = data?.posts?.slice(0, 4)

  return (
    <Layout>
      <div
        className={{ display: 'flex', flexDirection: 'column', gap: '100px' }}
      >
        <section
          class='page-title page-title-center'
          style={{ marginBottom: '50px' }}
        >
          <div class='container'>
            <div class='page-title-row'>
              <div class='page-title-content mw-sm'>
                <h1>Lifestyle</h1>
                <span>
                  Phosfluorescently target clicks-and-mortar growth strategies
                  for timely infrastructures. Monotonectally embrace
                  high-quality applications.
                </span>
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
