import React from 'react'
import Candidate from './candidate'

const Content = ({ className, list }) => {
  return (
    <section className={`section-candidates section-candidates--${className}`}>
      <div className='section-wrapper'>
        <ul className='candidates-list'>
          {list.map((result) => {
            return <Candidate key={result.id} candidate={result} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Content
