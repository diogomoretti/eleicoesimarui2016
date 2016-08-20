import React from 'react'

const Candidate = ({ candidate }) => {
  return (
    <li className={`candidate-item candidate-item--${candidate.cargo.nome.toLowerCase()}`}>
      <div className='candidate-item__avatar-wrapper'>
        <img
          alt={candidate.name}
          className='candidate-item__avatar-item'
          src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${candidate.id}?x=1471489200000`}
        />
      </div>
      <div className='candidate-item__number'>{candidate.numero}</div>
      <h2 className='candidate-item__name'>
        {candidate.nomeUrna}
      </h2>
      <p className='candidate-item__partido'>
        {candidate.partido.sigla} – {candidate.nomeColigacao}
      </p>
    </li>
  )
}

export default Candidate
