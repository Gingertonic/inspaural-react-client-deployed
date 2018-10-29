import React, { Component } from 'react'
import MixerSlider from '../components/MixerSlider'
import { connect } from 'react-redux'

class Mixer extends Component {
  handleQuoteChange = (value, quoteNum) => {
    this.props.updateQuoteVolume(value, quoteNum)
  }

  handleAmbienceChange = (value, id=null) => {
    this.props.updateAmbienceVolume(value)
  }

  render(){

    return (
      <div className="mixer-container">
        <MixerSlider track={this.props.quote1} handleChange={this.handleQuoteChange}/>
        <MixerSlider track={this.props.quote2} handleChange={this.handleQuoteChange}/>
        <MixerSlider track={this.props.quote3} handleChange={this.handleQuoteChange}/>
        <MixerSlider track={this.props.quote4} handleChange={this.handleQuoteChange}/>
        <MixerSlider track={this.props.ambience} handleChange={this.handleAmbienceChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quote1: state.currentInspaural.quote1,
    quote2: state.currentInspaural.quote2,
    quote3: state.currentInspaural.quote3,
    quote4: state.currentInspaural.quote4,
    ambience: state.currentInspaural.selectedAmbience
  }
}

export default connect(mapStateToProps)(Mixer)
