import React, { Component } from 'react'
import InspauralLi from '../components/InspauralLi'

class AllInspaurals extends Component {
  componentDidMount = () => {
    this.props.fetchInspaurals()
  }

  loadInspaural = (e, inspId) => {
    e.preventDefault()
    this.props.fetchInspauralFromDb(inspId)
  }

  deleteInspaural = (e, inspId) => {
    e.preventDefault()
    this.props.deleteInspauralFromDb(inspId)
  }

  render(){
    const renderInspaurals = this.props.allInspaurals.map(insp => <InspauralLi key={insp.id} loadInspaural={this.loadInspaural} deleteInspaural={this.deleteInspaural} insp={insp}/>)
    return (
      <div className="inspaural-index-container">
        <ul>
          {renderInspaurals}
        </ul>
      </div>
    )
  }
}

export default AllInspaurals
