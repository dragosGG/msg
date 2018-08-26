import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { withMobileDialog } from "../../node_modules/@material-ui/core";

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

  const handleChange = (mood) => {
    return (event) => {
      props.onChange(mood, event.target.value)
    }
  }

  return (
    <div className={classes.container}>
      <TextField label="Sad #1" className={classes.textField}  value={props.value.sad1} onChange={handleChange('sad1')}/>
      <TextField label="Sad #2" className={classes.textField}  value={props.value.sad2} onChange={handleChange('sad2')}/>
      <TextField label="Glad #1" className={classes.textField} value={props.value.glad1} onChange={handleChange('glad1')}/>
      <TextField label="Glad #2" className={classes.textField} value={props.value.glad2} onChange={handleChange('glad2')}/>
    </div>
  )
}

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFieldMargins)
