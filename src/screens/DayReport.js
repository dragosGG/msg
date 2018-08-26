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

class DayReport extends React.Component {
  constructor(props) {
    super(props)
    const today = new Date()

    this.state = {
      rating: 7,
      sad1: "",
      sad2: "",
      glad1: "",
      glad2: "",
      date: today.toISOString().split("T")[0]
    }
  }

  handleRatingChange = rating => {
    this.setState({ rating })
  }

  handleMoodChange = (mood, value) => {
    this.setState({ [mood]: value })
  }

  save = () => {
    const { user } = this.props
    if (!user) {
      throw new Error("Cant save shit without a user")
    }
    const { uid } = user
    const { date } = this.state

    firebase
      .database()
      .ref(`users/${uid}/data/${date}`)
      .set(this.state, () => {
        console.log("asdasdasdasdasdas", this.props)
        this.props.onDayReported && this.props.onDayReported()
      })
  }

  render() {
    return (
      <div className="DayReport">
        <Rating onChange={this.handleRatingChange} value={this.state.rating} />
        <MoodInputGroup onChange={this.handleMoodChange} value={this.state} />
        <Button variant="contained" color="primary" onClick={this.save}>
          Save
        </Button>
      </div>
    )
  }
}

// Rating.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(Rating)
export default DayReport
