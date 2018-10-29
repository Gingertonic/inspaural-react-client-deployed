import React, { Component } from 'react'
import Ambience from '../components/Ambience'

class Ambiences extends Component {

  state = {
    audioUrl: "",
    playStatus: "STOPPED",
  }

  handleOnClick = (audioUrl, ambiId, imageUrl) => {
    if (this.state.audioUrl === audioUrl){
      if (this.state.playStatus === "PLAYING"){
        this.setState({
          ...this.state,
          playStatus: "STOPPED"
        })
        this.props.updateAmbienceId(0)
      } else {
        this.setState({
          ...this.state,
          playStatus: "PLAYING"
        })
        this.props.updateAmbienceId(ambiId, audioUrl, imageUrl)
      }
    } else {
      this.setState({
        audioUrl: audioUrl,
        playStatus: "PLAYING"
      })
      this.props.updateAmbienceId(ambiId, audioUrl, imageUrl)
    }
  }

  render(){
    const renderAmbiences = this.props.ambiences.map(ambi => <Ambience key={ambi.id} ambience={ambi} selectedAmbience={(this.props.selectedAmbience.id === ambi.id) ? "selected-ambience" : "unselected-ambience"} handleOnClick={this.handleOnClick}/>)

    return (
      <React.Fragment>
        <div className="ambiences-container">
          {renderAmbiences}
        </div>
      </React.Fragment>
    )
  }
}

export default Ambiences
