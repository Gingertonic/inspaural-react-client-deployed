import React from 'react'
import Slider from 'react-rangeslider'

const MixerSlider = props => {
    return (
      <React.Fragment>
        <div className="mixer-slider">
        <Slider
            min={0}
            max={100}
            value={props.track.volume}
            orientation="vertical"
            onChange={value => props.handleChange(value, props.track.quoteNum)}
          />
        <img className="mixer-track-thumb" alt="Track thumbnail" src={props.track.imageUrl} />
        </div>
      </React.Fragment>
    )
}

export default MixerSlider
