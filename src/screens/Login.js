import React from "react"
import PropTypes from "prop-types"
// import { withStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import firebase from "../config/firebase"

// const styles = {
//   root: {
//     width: 300
//   }
// }

class LoginScreen extends React.Component {
  handleClick = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(token, user)
        this.props.onLogin()
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.error(errorCode, errorMessage, email, credential)
      })
  }

  render() {
    return (
      <div className="LoginScreen">
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Login with Facebook
        </Button>
      </div>
    )
  }
}

LoginScreen.propTypes = {
  onLogin: PropTypes.func.isRequired
}

// export default withStyles(styles)(Rating)
export default LoginScreen
