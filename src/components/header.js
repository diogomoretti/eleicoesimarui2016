import React from 'react'
import Menu from './menu'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-title'>
          <h1 className='header-logo'>Imaruí Eleições 2016</h1>
        </div>
        <div className='header-menu'>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
