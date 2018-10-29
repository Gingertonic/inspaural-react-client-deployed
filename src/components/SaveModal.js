import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SaveModal extends React.Component {

  state = {
    name: this.props.name
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render = () => {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.openState}
        onClose={this.props.handleClose}
      >
        <div className="save-modal">
            Name your Inspaural...
            <TextField
              id="inspaural-name"
              label="Name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              margin="normal"
            />
            <Button variant="outlined" color="primary" onClick={() => this.props.handleSave(this.props.name)}>
              <NavLink to="/mixer" exact>Save</NavLink>
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => this.props.handleClose}>Cancel</Button>
        </div>
      </Modal>
    )
  }
}
