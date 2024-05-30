import React from 'react'
import { useGetAllCategoriesQuery } from '../redux/slices/categoryApiSlice'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery()

  return (
    <div className='container'>
      <div className='header-row justify-content-lg-center header-border'>
        <nav className='primary-menu with-arrows'>
          <ul className='menu-container justify-content-between'>
            <li className='menu-item current'>
              <Link to='/' className='menu-link' href='demo-blog.html'>
                <div>Home</div>
              </Link>
            </li>
            {categories?.map((cat, i) => (
              <li className='menu-item' key={i}>
                <Link
                  to={`posts/category/${cat?.category}`}
                  className='menu-link'
                  href='demo-blog-categories.html'
                >
                  <div>{cat?.category}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <form className='top-search-form' action='search.html' method='get'>
          <input
            type='text'
            name='q'
            className='form-control'
            placeholder='Type &amp; Hit Enter..'
            autoComplete='off'
          />
        </form>
      </div>
    </div>
  )
}

export default MobileNav
