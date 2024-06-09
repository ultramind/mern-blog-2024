import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Aside from '../components/Aside'
import Subscribe from '../components/Subscribe'
import Posts from '../components/postContainer/Posts'
import CategoryList from '../components/postContainer/CategoryList'
import Skeleton from 'react-loading-skeleton'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'
import HeroSkeleton from '../components/SkeletonsLoaders/HeroSkeleton'

const Home = () => {
  const [query, setQuery] = useState({
    category: '',
    search: '',
    page: 1,
    limit: 10,
    sort: 'desc',
    status: 'published'
  })
  const { data, isLoading, isSuccess } = useGetAllPostsQuery(query)
  const newPosts = data?.posts?.slice(0, 4)

  return (
    <section id='content'>
      <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
        <div className='container'>
          <div className='row border-between'>
            {/* Hero section */}
            <Hero />

            {/* Aside Section */}
            <Aside posts={newPosts} isLoading={isLoading} />
          </div>

          <Subscribe />
        </div>

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
  )
}

export default Home
