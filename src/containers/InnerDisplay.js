import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class InnerDisplay extends Component {
  render(){
    return(
      <NavLink to="/my-inspaurals" exact>
        <div className="welcome">
          inspaural
        </div>
      </NavLink>
    )
  }
}

export default InnerDisplay
