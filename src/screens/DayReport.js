import React from "react"
import PropTypes from "prop-types"
// import { withStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Rating from "../components/Rating"
import MoodInputGroup from "../components/MoodInputGroup"

// const styles = {
//   root: {
//     width: 300
//   }
// }

class DayReport extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 7,
      sad1: "",
      sad2: "",
      glad1: "",
      glad2: ""
    }
  }

  handleRatingChange = rating => {
    this.setState({ rating })
  }

  render() {
    return (
      <div className="DayReport">
        <Rating onChange={this.handleRatingChange} value={this.state.rating} />
        <MoodInputGroup />
        <Button variant="contained" color="primary">
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
