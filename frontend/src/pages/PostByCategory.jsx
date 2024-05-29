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
import { useParams, useSearchParams } from 'react-router-dom'

const PostByCategory = () => {
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  console.log('Queries', category, search)

  const { data, isLoading, isError, error } = useGetAllPostsQuery(page)
  const newData = data?.slice(0, 4)

  // useEffect(() => {}, [page])

  return (
    <Layout>
      <div className=''>
        <section className='page-title page-title-center mb-5'>
          <div className='container'>
            <div className='page-title-row'>
              <div className='page-title-content mw-sm'>
                <h1>{category}</h1>
              </div>
            </div>
          </div>
        </section>
        <section id='content'>
          <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
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
      </div>
    </Layout>
  )
}

export default PostByCategory
