import React, { Component } from 'react'
import axios from 'axios'
import CandidateExtra from './candidate-extra'

class Candidate extends Component {

  constructor(props) {
    super(props)
    this.candidate = props.candidate
    this.state = {
      showMore: false,
      extraInfo: {},
      fetchingMore: false
    }
    this.showMore = this.showMore.bind(this)
  }

  getMoreInfo(idCandidate) {
    axios.get(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2016/81418/2/candidato/${idCandidate}`)
      .then(response => {
        this.setState({
          extraInfo: response.data
        }, () => {
          this.setState({
            fetchingMore: false,
            showMore: (this.state.showMore) ? false : true
          })
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  showMore(idCandidate) {
    this.setState({
      fetchingMore: true
    })
    this.getMoreInfo(idCandidate)
  }

  render() {
    return (
      <li
        className={`candidate-item candidate-item--${this.candidate.cargo.nome.toLowerCase()} ${this.state.showMore.toString()}`}
        onClick={() => this.showMore(this.candidate.id)}
      >
        <div className='candidate-item-main'>
          <div className='candidate-item__avatar-wrapper'>
            <img
              alt={this.candidate.name}
              className='candidate-item__avatar-item'
              src={`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/${this.candidate.id}?x=1471489200000`}
            />
          </div>
          <div className='candidate-item__number'>{this.candidate.numero}</div>
          <h2 className='candidate-item__name'>
            {this.candidate.nomeUrna}
          </h2>
          <p className='candidate-item__partido'>
            {this.candidate.partido.sigla} – {this.candidate.nomeColigacao}
          </p>
        </div>

        {!this.state.fetchingMore && this.state.showMore && <CandidateExtra candidate={this.state.extraInfo} />}
      </li>
    )
  }

}

export default Candidate
