import React from 'react'

const CategoryList = () => {
  return (
    <div
      className='col-lg-3 cat-widgets position-sticky h-100'
      style={{ top: '234px' }}
    >
      <div className='widget widget-search'>
        <form className='input-group'>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-secondary uil uil-search'
            type='button'
          ></button>
        </form>
      </div>

      <div className='widget widget-nav mt-md-5'>
        <ul className='nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              All Categories
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Fashion
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Arts &amp; Culture
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Family
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Beauty
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Fitness
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Music
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Design &amp; Illustrations
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CategoryList
