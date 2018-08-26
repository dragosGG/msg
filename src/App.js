import React, { Component } from "react"
import "./App.css"

import firebase from "./config/firebase"
import Login from "./screens/Login"
import DayReport from "./screens/DayReport"

const screensMap = {
  login: Login,
  dayReport: DayReport
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screen: "dayReport"
    }
  }

  handleLogin = () => {
    this.setState({ screen: "dayReport" })
  }

  render() {
    return (
      <div className="App">
        {React.createElement(screensMap[this.state.screen], {
          onLogin: this.handleLogin
        })}
      </div>
    )
  }
}

export default App
