import React from 'react'
import Candidate from './candidate'

const Content = ({ className, data }) => {
  return (
    <section className={`section-candidates section-candidates--${className}`}>
      <div className='section-wrapper'>
        <ul className='candidates-list'>
          {data.map((item) => {
            return <Candidate key={item.id} candidate={item} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Content
