import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateInspauralName } from '../actions/inspaural_actions'



class InnerNav extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = name => {
    this.handleClose();
    this.props.updateInspauralName(name)
  }

  render() {

    return (
      <div className="nav-bar">
       <NavLink to='/ambiences' exact>Ambiences</NavLink>
       <NavLink to='/save' exact>Save</NavLink>
       <NavLink to='/mixer' exact>Mixer</NavLink>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.currentInspaural.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateInspauralName: name => dispatch(updateInspauralName(name)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InnerNav);
