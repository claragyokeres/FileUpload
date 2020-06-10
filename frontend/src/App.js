import React, { Component } from 'react'
import Column from './components/Column'
import ColumnRow from './components/ColumnRow'
import Upload from './components/Upload'
import { Button } from '@material-ui/core'

const url = 'http://localhost:8080/files'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: null
    }
  }

  fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((files) => this.setState({ files }))
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        <Column files={this.state.files} />
        <Upload />
      </>
    )
  }

}

export default App 