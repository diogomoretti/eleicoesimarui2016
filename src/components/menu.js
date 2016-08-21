import React from 'react'

const Menu = ({ candidateType, handleMenu }) => {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <span onClick={() => handleMenu('prefeitos')} className={`menu-link menu-link--prefeitos ${candidateType}`}>Prefeitos</span>
        </li>
        <li className='menu-item'>
          <span onClick={() => handleMenu('vereadores')} className={`menu-link menu-link--vereadores ${candidateType}`}>Vereadores</span>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
