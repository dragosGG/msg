import React from "react"
import PropTypes from "prop-types"
// import { withStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Rating from "../components/Rating"
import MoodInputGroup from "../components/MoodInputGroup"
import firebase from "../config/firebase"

// const styles = {
//   root: {
//     width: 300
//   }
// }

class Timeline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentWillMount() {
    const { user } = this.props
    if (!user) {
      throw new Error("Cant save shit without a user")
    }
    const { uid } = user

    this.fetcher = firebase
      .database()
      .ref(`users/${uid}/data`)
      .on("value", snapshot => {
        const val = snapshot.val()
        this.setState({ data: Object.values(val) })
      })
  }

  componentWillUnmount() {
    this.fetcher.off("value")
  }

  render() {
    return (
      <div className="Timeline">
        {this.state.data.map(day => (
          <p key={day.date}>
            {day.date} {day.rating} {day.sad1} {day.sad2} {day.glad1}
            {day.glad2}
          </p>
        ))}
      </div>
    )
  }
}

// Rating.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(Rating)
export default Timeline
