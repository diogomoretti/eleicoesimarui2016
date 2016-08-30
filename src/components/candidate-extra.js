import React from 'react'
import moment from 'moment'
import price from '../utils/currency'

const CandidateExtra = ({ candidate }) => {
  return (
    <div className='candidate-extrainfo'>

      <div className='candidate-extrainfo-line'>
        <div className='candidate-extrainfo--title'>
          Idade
        </div>
        <div className='candidate-extrainfo--value'>
          {moment().diff(candidate.dataDeNascimento, 'years')} anos
        </div>
      </div>

      <div className='candidate-extrainfo-line'>
        <div className='candidate-extrainfo--title'>
          Naturalidade
        </div>
        <div className='candidate-extrainfo--value'>
          {candidate.nomeMunicipioNascimento} / {candidate.sgUfNascimento}
        </div>
      </div>

      <div className='candidate-extrainfo-line'>
        <div className='candidate-extrainfo--title'>
          Grau de Instrução
        </div>
        <div className='candidate-extrainfo--value'>
          {candidate.grauInstrucao}
        </div>
      </div>

      <div className='candidate-extrainfo-line'>
        <div className='candidate-extrainfo--title'>
          Total de bens
        </div>
        <div className='candidate-extrainfo--value'>
          R$ {price(candidate.totalDeBens)}
        </div>
      </div>

    </div>
  )
}

export default CandidateExtra
