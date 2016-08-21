import React from 'react'
import Header from './header'
import Content from './content'

const AppContainer = ({
    data,
    isFetching,
    candidateType,
    handleMenu
  }) => {
  return (
    <div>
      <Header candidateType={candidateType} handleMenu={handleMenu} />
      <main className='main'>
        {isFetching && <div>carregando</div>}
        {!isFetching && console.log(data)}
        <Content className={candidateType} data={data} />
      </main>
    </div>
  )
}

export default AppContainer
