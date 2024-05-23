import React from 'react'
import Hero from '../components/Hero'
import Aside from '../components/Aside'
import Subscribe from '../components/Subscribe'
import Posts from '../components/container/Posts'
import CategoryList from '../components/container/CategoryList'
import Skeleton from 'react-loading-skeleton'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'
import HeroSkeleton from '../components/SkeletonsLoaders/HeroSkeleton'

const Home = () => {
  const { data, isLoading, isError, error } = useGetAllPostsQuery()

  return (
    <section id='content'>
      <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
        <div className='container'>
          <div className='row border-between'>
            {/* Hero section */}
            {isLoading && <HeroSkeleton />}
            {data && <Hero post={data[0]} />}

            {/* Aside Section */}
            <Aside />
          </div>

          <Subscribe />
        </div>

        <div className='container'>
          <div className='row border-between'>
            {/* category list */}
            <CategoryList />
            {/* All posts */}
            <Posts />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
