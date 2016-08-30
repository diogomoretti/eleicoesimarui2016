import React, { Component } from 'react'
import axios from 'axios'
import AppContainer from './components/app-container'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      isFetching: true,
      candidateType: 'prefeitos'
    }
  }

  handleMenu(type) {
    return (type) => {
      this.setState({
        candidateType: type,
        isFetching: true
      }, () => {
        this.getData()
      })
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    let candidateCode = (this.state.candidateType === 'prefeitos') ? '11' : '13'

    axios.get(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2016/81418/2/${candidateCode}/candidatos`)
      .then(response => {
        this.setState({
          data: response.data.candidatos
        }, () => {
          this.setState({
            isFetching: false
          })
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <AppContainer
        data={this.state.data}
        isFetching={this.state.isFetching}
        candidateType={this.state.candidateType}
        handleMenu={this.handleMenu(this.state.candidateType)}
      />
    )
  }
}

export default App
