import React, { Component } from 'react'
import Quote from '../components/Quote'
import Sound from 'react-sound';
import Playback from '../components/Playback'


class Quotes extends Component {

  state = {
    audioUrl: "",
    playStatus: "STOPPED",
    volume: 80,
    nextQuoteNum: 1
  }

  handleOnMouseEnter = quoteUrl => {
    this.setState({
      audioUrl: quoteUrl,
      playStatus: "PLAYING"
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      playStatus: "PAUSED"
    })
  }

  handleOnClick = (quoteId, quoteAudioUrl, newQuoteImageUrl) => {
    this.props.updateQuoteId(this.state.nextQuoteNum, quoteId, quoteAudioUrl, newQuoteImageUrl)
    let nextQuoteNum = this.increaseNextQuoteNum();
    this.setState({
      nextQuoteNum: nextQuoteNum
    })
  }

  increaseNextQuoteNum = () => {
    return (this.state.nextQuoteNum < 4) ? this.state.nextQuoteNum + 1 : 1
  }

  handleOnReset = () => {
    this.props.resetQuotes()
  }

  render(){
    const renderQuotes = this.props.quotes.map(quote => <Quote quote={quote} selectedQuote={this.props.selectedQuoteIds.includes(quote.id) ? "selected-quote" : "unselected-quote"} handleOnMouseEnter={this.handleOnMouseEnter} handleOnMouseLeave={this.handleOnMouseLeave} handleOnClick={this.handleOnClick}/>)

    return (
      <React.Fragment>
        <div className="quotes-container">
          {renderQuotes}
          <img
            className="reset-quotes"
            id="reset-quotes"
            src="http://www.weareclear.co.uk/wp-content/uploads/2017/12/logo.png"
            alt="reset-button"
            onClick={this.handleOnReset}
          />
          <Sound
            url={this.state.audioUrl}
            autoload={true}
            playStatus={this.state.playStatus}
            volume={this.state.volume}
          />
          <div className="playback">
              <div className="playback">
                <Playback
                  quote1={this.props.selectedQuote1}
                  quote2={this.props.selectedQuote2}
                  quote3={this.props.selectedQuote3}
                  quote4={this.props.selectedQuote4}
                  ambience={this.props.selectedAmbience}
                />
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}




export default Quotes
