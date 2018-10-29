import React from 'react'
import Sound from 'react-sound'

const PlaybackTrack = props => {
  return (
    <Sound url={props.track.audioUrl} playStatus="PLAYING" autoLoad loop volume={props.track.volume}/>
  )
}

export default PlaybackTrack
