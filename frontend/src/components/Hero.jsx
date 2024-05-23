import React from 'react'
import { useGetAllPostsQuery } from '../redux/slices/postApiSlice'

const Hero = ({ post }) => {
  console.log(post)
  return (
    <div className='col-lg-7 mb-5 mb-lg-0'>
      <article className='entry border-bottom-0 mb-0'>
        <div className='entry-image'>
          <a href='demo-blog-single.html'>
            <img
              src={`../../../backend/public/uploads/posts/${post?.imgUrl}`}
              alt='Image 3'
            />
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
          <p>
            Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem
            pariatur quibusdam veritatis quisquam laboriosam esse beatae hic
            perferendis. Lorem ipsum dolor sit amet. Rapidiously negotiate
            standardized web services and goal-oriented outsourcing. Uniquely
            repurpose compelling functionalities before parallel mindshare.
          </p>
        </div>
      </article>
    </div>
  )
}

export default Hero
