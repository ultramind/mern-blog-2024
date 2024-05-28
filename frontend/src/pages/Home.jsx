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
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, error } = useGetAllPostsQuery(page)
  const newData = data?.slice(0, 4)

  // useEffect(() => {}, [page])

  return (
    <section id='content'>
      <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
        <div className='container'>
          <div className='row border-between'>
            {/* Hero section */}
            {isLoading && <HeroSkeleton />}
            {data && <Hero post={data[0]} />}

            {/* Aside Section */}
            <Aside posts={newData} isLoading={isLoading} />
          </div>

          <Subscribe />
        </div>

        <div className='container'>
          <div className='row border-between'>
            {/* category list */}
            <CategoryList />
            {/* All posts */}
            <Posts
              page={page}
              setPage={setPage}
              posts={data}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
