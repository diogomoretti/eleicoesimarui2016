import React, { Component } from 'react'
import axios from 'axios'
import AppContainer from './components/app-container'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      prefeitos: [],
      vereadores: [],
      isFetching: true
    }
  }

  componentWillMount() {
    axios.get('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2016/81418/2/11/candidatos')
      .then(response => {
        this.setState({
          prefeitos: response.data.candidatos
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
        prefeitos={this.state.prefeitos}
        isFetching={this.state.isFetching}
      />
    )
  }
}

export default App
