import React from 'react'
import Layout from '../Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useDeletePostMutation,
  useGetPostQuery
} from '../redux/slices/postApiSlice'
import Skeleton from 'react-loading-skeleton'
import CommentSection from '../components/comment/CommentSection'
// icons
import { FaRegHeart } from 'react-icons/fa6'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import PostBody from '../components/postContainer/PostBody'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const PostDetails = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const { data, isLoading } = useGetPostQuery(slug)

  const [deletePost, { isLoading: loading }] = useDeletePostMutation()

  const handlePostDelete = async () => {
    try {
      const res = await deletePost(data?._id)
      toast.success('Post deleted successful', { position: 'bottom-center' })
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.message, {
        position: 'bottom-center'
      })
    }
  }

  return (
    <Layout>
      <section id='content'>
        <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
          <div className='container'>
            <div className='single-post mb-0'>
              <div className='entry'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6'>
                    <div className='entry-title'>
                      <div className='entry-categories'>
                        <a href='demo-blog-categories.html'>
                          {data?.category || <Skeleton />}
                        </a>
                      </div>
                      <h2>{data?.title || <Skeleton />} </h2>
                    </div>
                  </div>
                </div>

                <div className='d-flex justify-content-center mt-2'>
                  <div className='entry-meta'>
                    <ul>
                      <li>{data?.createdAt}</li>
                      <li>
                        By{' '}
                        <a href='#'>
                          {data?.author.firstname || <Skeleton />}{' '}
                          {data?.author.lastname}
                        </a>
                      </li>
                    </ul>
                    {/* CTA actions */}
                    <hr />
                    <ul>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <FaRegHeart size={25} style={{ cursor: 'pointer' }} />
                        <span>45</span>
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <AiOutlineLike
                          size={25}
                          style={{ cursor: 'pointer' }}
                        />
                        <span>45</span>
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <AiOutlineDislike
                          size={25}
                          style={{ cursor: 'pointer' }}
                        />
                        <span>45</span>
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <FaEye size={25} style={{ cursor: 'pointer' }} />
                        <span>45</span>
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <Link to={`/post/${data?.slug}/edit`}>
                          <FaRegEdit size={25} style={{ cursor: 'pointer' }} />
                        </Link>
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        <MdDelete
                          size={25}
                          style={{ cursor: 'pointer' }}
                          onClick={handlePostDelete}
                        />
                      </li>
                      <li className='d-flex justify-content-center align-items-center gap-2'>
                        {loading && <Loading />}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='entry-image mt-5'>
                  <a
                    href='demos/blog/images/single/hero-full.jpg'
                    data-lightbox='image'
                  >
                    <img
                      className='rounded'
                      src={data?.imageUrl || <Skeleton />}
                      alt='Blog Single'
                    />
                  </a>
                </div>

                <div className='entry-content'>
                  <div className='row'>
                    <div
                      className='col-lg-2 media-content'
                      data-animate='fadeIn'
                    >
                      <div className='entry-title text-start'>
                        <h4>{data?.title}</h4>
                      </div>
                      <div>
                        <h5 className='mb-2'>Share this Post:</h5>
                        <div>
                          <a
                            href='#'
                            className='social-icon si-small rounded-circle text-light border-0 bg-facebook'
                          >
                            <i className='fa-brands fa-facebook-f'></i>
                            <i className='fa-brands fa-facebook-f'></i>
                          </a>
                          <a
                            href='#'
                            className='social-icon si-small rounded-circle text-light border-0 bg-x-twitter'
                          >
                            <i className='fa-brands fa-x-twitter'></i>
                            <i className='fa-brands fa-x-twitter'></i>
                          </a>
                          <a
                            href='#'
                            className='social-icon si-small rounded-circle text-light border-0 bg-pinterest'
                          >
                            <i className='fa-brands fa-pinterest-p'></i>
                            <i className='fa-brands fa-pinterest-p'></i>
                          </a>
                          <a
                            href='#'
                            className='social-icon si-small rounded-circle text-light border-0 bg-rss'
                          >
                            <i className='fa-solid fa-rss'></i>
                            <i className='fa-solid fa-rss'></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-1'></div>

                    <div className='text-content col-lg-6'>
                      <PostBody postBody={data?.body} />

                      <br />
                      <div className='line'></div>
                      {/* Comment section */}
                      <CommentSection post={data} />

                      <div className='line my-6'></div>

                      <h4 className='mb-3'>Related Tags</h4>
                      <div className='tagcloud'>
                        <a href='#'>general</a>
                        <a href='#'>information</a>
                        <a href='#'>media</a>
                        <a href='#'>press</a>
                        <a href='#'>gallery</a>
                        <a href='#'>illustration</a>
                      </div>
                      <div className='clear'></div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className='mb-0'>Related Posts</h3>

              <div className='row posts-md'>
                <div className='col-lg-3 col-sm-6'>
                  <article className='entry'>
                    <div className='entry-image'>
                      <a href='#'>
                        <img
                          src='demos/blog/images/video-thumbs/1.jpg'
                          alt='Image 3'
                        />
                      </a>
                    </div>
                    <div className='entry-title title-sm text-start'>
                      <div className='entry-categories'>
                        <a href='demo-blog-categories.html'>Travel</a>
                      </div>
                      <h3>
                        <a href='#' className='color-underline stretched-link'>
                          The Best Destinations in Asia for Solo Travel
                        </a>
                      </h3>
                    </div>
                    <div className='entry-meta'>
                      <ul>
                        <li>
                          <a href='#'>Mar 11, 2016</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <article className='entry'>
                    <div className='entry-image'>
                      <a href='#'>
                        <img
                          src='demos/blog/images/video-thumbs/2.jpg'
                          alt='Image 3'
                        />
                      </a>
                    </div>
                    <div className='entry-title title-sm text-start'>
                      <div className='entry-categories'>
                        <a href='demo-blog-categories.html'>Fashion</a>
                      </div>
                      <h3>
                        <a href='#' className='color-underline stretched-link'>
                          10 Trendy Fashion Instagram Profile You Need to Follow
                        </a>
                      </h3>
                    </div>
                    <div className='entry-meta'>
                      <ul>
                        <li>
                          <a href='#'>Mar 11, 2016</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className='col-lg-3 col-sm-6'>
                  <article className='entry'>
                    <div className='entry-image'>
                      <a href='#'>
                        <img
                          src='demos/blog/images/video-thumbs/3.jpg'
                          alt='Image 3'
                        />
                      </a>
                    </div>
                    <div className='entry-title title-sm text-start'>
                      <div className='entry-categories'>
                        <a href='demo-blog-categories.html'>Travel</a>
                      </div>
                      <h3>
                        <a href='#' className='color-underline stretched-link'>
                          23 Top Travel Bloggers Who Inspire Us To Travel
                        </a>
                      </h3>
                    </div>
                    <div className='entry-meta'>
                      <ul>
                        <li>
                          <a href='#'>Mar 11, 2016</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>

                <div className='col-lg-3 col-sm-6'>
                  <article className='entry'>
                    <div className='entry-image'>
                      <a href='#'>
                        <img
                          src='demos/blog/images/video-thumbs/4.jpg'
                          alt='Image 3'
                        />
                      </a>
                    </div>
                    <div className='entry-title title-sm text-start'>
                      <div className='entry-categories'>
                        <a href='demo-blog-categories.html'>Travel</a>
                      </div>
                      <h3>
                        <a href='#' className='color-underline stretched-link'>
                          23 Top Travel Bloggers Who Inspire Us To Travel
                        </a>
                      </h3>
                    </div>
                    <div className='entry-meta'>
                      <ul>
                        <li>
                          <a href='#'>Mar 11, 2016</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PostDetails
