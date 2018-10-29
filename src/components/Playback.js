import React from 'react'
import PlaybackTrack from './PlaybackTrack'

const Playback = props => {
  return(
    <React.Fragment>
      <PlaybackTrack track={props.quote1}/>
      <PlaybackTrack track={props.quote2}/>
      <PlaybackTrack track={props.quote3}/>
      <PlaybackTrack track={props.quote4}/>
      <PlaybackTrack track={props.ambience}/>
    </React.Fragment>
  )
}

export default Playback
