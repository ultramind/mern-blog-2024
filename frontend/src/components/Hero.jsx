import React from 'react'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'
import { Link } from 'react-router-dom'

const Hero = ({ post }) => {
  const postBody = post?.body.substr(0, 300)
  return (
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
              {post?.category} sdjskdadddd
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
              <a href='#'>{post?.createdAt}</a>
            </li>
          </ul>
        </div>
        <div className='entry-content'>
          <p>{postBody}...</p>
        </div>
      </article>
    </div>
  )
}

export default Hero
