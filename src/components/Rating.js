import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/lab/Slider"

const styles = {
  root: {
    width: 300
  }
}

class Rating extends React.Component {
  handleChange = (event, value) => {
    this.props.onChange(value)
  }

  render() {
    const { classes, value } = this.props

    return (
      <div className={classes.root}>
        <Typography id="label">{this.props.value}</Typography>
        <Slider
          value={value}
          min={1}
          max={10}
          step={1}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default withStyles(styles)(Rating)
