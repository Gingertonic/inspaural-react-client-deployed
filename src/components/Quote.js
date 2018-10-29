import React from 'react'

const Quote = props => {
  return (
    <img
      className={props.selectedQuote}
      id={props.quote.id}
      src={props.quote.imageUrl}
      alt={props.quote.author}
      onMouseEnter={e => props.handleOnMouseEnter(props.quote.audioUrl)}
      onMouseLeave={e => props.handleOnMouseLeave()}
      onClick={e => props.handleOnClick(props.quote.id, props.quote.audioUrl, props.quote.imageUrl)}
    />
  )
}

export default Quote
