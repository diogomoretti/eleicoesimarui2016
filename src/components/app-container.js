import React from 'react'
import Header from './header'

const AppContainer = ({
    prefeitos,
    isFetching
  }) => {
  return (
    <main>
      <Header />
      {isFetching && <div>carregando</div>}
      {!isFetching && console.log(prefeitos)}
    </main>
  )
}

export default AppContainer
