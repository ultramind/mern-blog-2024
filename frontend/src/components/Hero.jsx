import React from 'react'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'

const Hero = ({ post }) => {
  const postBody = post?.body.substr(0, 300)
  return (
    <div className='col-lg-7 mb-5 mb-lg-0'>
      <article className='entry border-bottom-0 mb-0'>
        <div className='entry-image'>
          <a href='demo-blog-single.html'>
            <img src={`${post?.imageUrl}`} alt='Image 3' />
          </a>
        </div>
        <div className='entry-title'>
          <div className='entry-categories'>
            <a href='demo-blog-categories.html'>{post?.category}</a>
          </div>
          <h3>
            <a
              href='demo-blog-single.html'
              className='stretched-link color-underline'
            >
              <span>{post?.title}</span>
            </a>
          </h3>
        </div>
        <div className='entry-meta'>
          <ul>
            <li>
              <a href='#'>{post.createdAt}</a>
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
