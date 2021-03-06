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
        const today = new Date()
        const dateString = today.toISOString().split("T")[0]
        firebase
          .database()
          .ref(`users/${user.uid}/data/${dateString}`)
          .once("value", snapshot => {
            if (snapshot.hasChild("date")) {
              this.setState({ screen: "timeline", user: user.toJSON() })
            } else {
              this.setState({ screen: "dayReport", user: user.toJSON() })
            }
          })
      }
    })
  }

  handleLogin = () => {
    this.setState({ screen: "dayReport" })
  }

  handleDayReport = () => {
    this.setState({ screen: "timeline" })
  }

  render() {
    return (
      <div className="App">
        {React.createElement(screensMap[this.state.screen], {
          onLogin: this.handleLogin,
          onDayReported: this.handleDayReport,
          user: this.state.user
        })}
      </div>
    )
  }
}

export default App
