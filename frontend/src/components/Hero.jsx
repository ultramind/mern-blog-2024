import React from 'react'
import {
  useGetAllPostsQuery,
  useGetFeaturedPostQuery
} from '../redux/slices/postApiSlice'
import { Link } from 'react-router-dom'
import PostBody from './postContainer/PostBody'
import { formatDateTime } from '../utils/utils'
import HeroSkeleton from './SkeletonsLoaders/HeroSkeleton'

const Hero = () => {
  const { data: post, isLoading } = useGetFeaturedPostQuery()
  const postBody = post?.body.substr(0, 300)
  return (
    <>
      {isLoading && <HeroSkeleton />}
      {post && (
        <div className='col-lg-7 mb-5 mb-lg-0'>
          <article className='entry border-bottom-0 mb-0'>
            <div className='entry-image'>
              <Link to={`post/${post?.slug}`}>
                <img src={`${post?.imageUrl}`} alt='Image 3' />
              </Link>
            </div>
            <div className='entry-title'>
              <div className='entry-categories'>
                <Link to={`/post/category/${post?.category}`}>
                  {post?.category}
                </Link>
              </div>
              <h3>
                <Link
                  to={`post/${post?.slug}`}
                  className='stretched-link color-underline'
                >
                  <span>{post?.title}</span>
                </Link>
              </h3>
            </div>
            <div className='entry-meta'>
              <ul>
                <li>
                  <a href='#'>{formatDateTime(post?.createdAt)}</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      )}
    </>
  )
}

export default Hero
