import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const TextFieldMargins = props => {
  const { classes } = props

  return (
    <div className={classes.container}>
      <TextField label="Sad #1" className={classes.textField} />
      <TextField label="Sad #2" className={classes.textField} />
      <TextField label="Glad #1" className={classes.textField} />
      <TextField label="Glad #2" className={classes.textField} />
    </div>
  )
}

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFieldMargins)
