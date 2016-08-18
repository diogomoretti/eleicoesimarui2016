import React, { Component } from 'react'
import AppContainer from './components/app-container'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      prefeitos: [],
      vereadores: []
    }
  }

  componentWillMount() {
    fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2016/81418/2/11/candidatos')
      .then((response) => {
        return response.json()
      })
      .then((prefeitos) => {
        this.setState({ prefeitos: prefeitos })
      })
  }

  render() {
    return (
      <AppContainer
        prefeitos={this.state.prefeitos}
      />
    )
  }
}

export default App
