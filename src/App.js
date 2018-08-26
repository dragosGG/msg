import React, { Component } from "react"
import "./App.css"

import firebase from "./config/firebase"
import Login from "./screens/Login"
import DayReport from "./screens/DayReport"
import Timeline from "./screens/Timeline"

const screensMap = {
  login: Login,
  dayReport: DayReport,
  timeline: Timeline
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screen: "login",
      user: null
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ screen: "timeline", user: user.toJSON() })
      }
    })
  }

  handleLogin = () => {
    this.setState({ screen: "dayReport" })
  }

  render() {
    return (
      <div className="App">
        {React.createElement(screensMap[this.state.screen], {
          onLogin: this.handleLogin,
          user: this.state.user
        })}
      </div>
    )
  }
}

export default App
