// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameError: false,
    isLastNameError: false,
    isFormSubmitted: false,
  }

  onFirstNameBlur = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameError: true, isFormSubmitted: false})
    } else {
      this.setState({isFirstNameError: false, firstName: event.target.value})
    }
  }

  onLastNameBlur = event => {
    if (event.target.value === '') {
      this.setState({isLastNameError: true, isFormSubmitted: false})
    } else {
      this.setState({isLastNameError: false, lastName: event.target.value})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameError: true})
    }
    if (lastName === '') {
      this.setState({isLastNameError: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    }
  }

  onResubmit = () => {
    this.setState({firstName: '', lastName: '', isFormSubmitted: false})
  }

  render() {
    const {isFirstNameError, isLastNameError, isFormSubmitted} = this.state

    const classFirstInputErr = isFirstNameError && 'inputError'
    const classSecondInputErr = isLastNameError && 'inputError'

    return (
      <div className="mainContainer">
        <h1 className="header">Registration</h1>
        <div className="registrationContainer">
          {isFormSubmitted ? (
            <div className="successCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="imageTick"
              />
              <p className="para">Submitted Successfully</p>
              <button
                type="button"
                onClick={this.onResubmit}
                className="resubmitSuccess"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              <form onSubmit={this.onSubmitForm}>
                <label htmlFor="fname" className="labels">
                  First Name
                </label>
                <br />
                <input
                  id="fname"
                  type="text"
                  className={`inputTexts ${classFirstInputErr}`}
                  placeholder="First name"
                  onBlur={this.onFirstNameBlur}
                />
                {isFirstNameError && <p className="errorMsg">Required</p>}
                <br />
                <label htmlFor="lname" className="labels">
                  Last Name
                </label>
                <br />
                <input
                  id="lname"
                  type="text"
                  className={`inputTexts ${classSecondInputErr}`}
                  placeholder="Last name"
                  onBlur={this.onLastNameBlur}
                />
                {isLastNameError && <p className="errorMsg">Required</p>}
                <br />
                <div className="buttonContainer">
                  <button className="submitBtn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
