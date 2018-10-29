import React from 'react'

const InspauralLi = props => {
  return (
    <li className="inspaural-li">
      <a href='/' onClick={e => props.loadInspaural(e, props.insp.id)}>{props.insp.name}</a>
      <a href='/' className="delete-button" onClick={e => props.deleteInspaural(e, props.insp.id)}>x</a>
    </li>
  )
}

export default InspauralLi
