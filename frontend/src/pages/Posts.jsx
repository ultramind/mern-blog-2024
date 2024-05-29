import React from 'react'

const Posts = () => {
  return (
    <section id='content'>
      <div className='content-wrap pt-0' style={{ overflow: 'visible' }}>
        <div className='container'>
          <div className='row border-between'>
            {/* Hero section */}
            {isLoading && <HeroSkeleton />}
            {data && <Hero post={data[0]} />}

            {/* Aside Section */}
            <Aside posts={newData} isLoading={isLoading} />
          </div>

          <Subscribe />
        </div>

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
  )
}

export default Posts
