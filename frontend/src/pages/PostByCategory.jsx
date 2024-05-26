import React from 'react'
import Layout from '../Layout'
import { useGetPostsByCategoryQuery } from '../redux/slices/postApiSlice'
import { useParams } from 'react-router-dom'
import CategoryList from '../components/container/CategoryList'
import Posts from '../components/container/Posts'

const PostByCategory = () => {
  const { category } = useParams()
  const { data, isLoading, error } = useGetPostsByCategoryQuery(category)
  console.log(data)

  return (
    <Layout>
      <div className=''>
        <section className='page-title page-title-center mb-6'>
          <div className='container'>
            <div className='page-title-row'>
              <div className='page-title-content mw-sm'>
                <h1>{category}</h1>
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
                <CategoryList />
                {/* All posts */}
                <Posts posts={data} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default PostByCategory
