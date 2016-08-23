import React from 'react'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Loading from './loading'

const AppContainer = ({
    data,
    isFetching,
    candidateType,
    handleMenu
  }) => {
  return (
    <div className='app'>
      <Header candidateType={candidateType} handleMenu={handleMenu} />
      <main className='main'>
        {isFetching && <Loading />}
        {!isFetching && <Content className={candidateType} data={data} />}
      </main>
      <Footer />
    </div>
  )
}

export default AppContainer
