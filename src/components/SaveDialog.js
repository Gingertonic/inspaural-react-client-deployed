import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';

class SaveDialog extends Component {

  state = {
    name: "",
    redirectSave: false,
    redirectError: false,
    openAlert: false
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirectSave: true
    })
  }

  handleClose = () => {
    this.setState({
      openAlert: false,
      redirectError: true
    })
  }

  saveAndClose = e => {
    e.preventDefault()
    if (this.props.currentAmbienceId === 0){
      this.setState({ openAlert: true });
    } else {
      this.props.updateInspauralName(e.target.nameInput.value)
      setTimeout(this.props.saveInspaural, 500)
      this.setRedirect()
    }
  }

  render = () => {
    const { redirectSave, redirectError } = this.state;
    if (redirectSave) {
      return <Redirect to='/my-inspaurals'/>;
    } else if (redirectError) {
      return <Redirect to='/ambiences'/>;
    } else {
      return (
        <div>
          <form className="save-dialog" onSubmit={this.saveAndClose}>
            <input
              name="nameInput"
              type="text"
              ref="nameInput"
              defaultValue={this.props.currentName}
              onChange={e => this.handleChange(e)}
              autofocus="true"
            />
          <Dialog
            open={this.state.openAlert}
            onClose={this.handleClose}
          >
            <div className="error-alert">
              Please choose an ambience for your inspaural before saving!
            </div>
          </Dialog>
          <br />
          <input type="submit" className="save-button" value="SAVE" />
          </form>
        </div>
      )
    }
  }
}

export default SaveDialog
