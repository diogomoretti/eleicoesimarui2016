import React from 'react'
import Header from './header'
import Content from './content'

const AppContainer = ({
    prefeitos,
    isFetching
  }) => {
  return (
    <div>
      <Header />
      <main className='main'>
        {isFetching && <div>carregando</div>}
        {!isFetching && console.log(prefeitos)}
        <Content className='prefeitos' list={prefeitos} />
      </main>
    </div>
  )
}

export default AppContainer
