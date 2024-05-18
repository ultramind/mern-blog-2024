import React from 'react'

const MobileNav = () => {
  return (
    <div className="container">
        <div className="header-row justify-content-lg-center header-border">
            
            <nav className="primary-menu with-arrows">

                <ul className="menu-container justify-content-between">
                    <li className="menu-item current"><a className="menu-link" href="demo-blog.html"><div>Home</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>World</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Tech</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Lifestyle</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Business</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Finance</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Food</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="demo-blog-categories.html"><div>Sports</div></a></li>
                </ul>

            </nav>

            <form className="top-search-form" action="search.html" method="get">
                <input type="text" name="q" className="form-control" placeholder="Type &amp; Hit Enter.." autoComplete="off" />
            </form>

        </div>
    </div>
  )
}

export default MobileNav