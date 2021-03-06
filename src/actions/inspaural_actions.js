const loading = () => {
  return {
    type: "LOADING"
  }
}

export const fetchInspauralFromDb = inspId => {
  return dispatch => {
    dispatch(loading());
    fetch('https://inspaural-api.herokuapp.com/api/v1/inspaurals/' + inspId, {
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(inspaural => dispatch({type: "FETCH_INSPAURAL", inspaural: inspaural}))
  }
}

export const deleteInspauralFromDb = inspId => {
  return dispatch => {
    dispatch(loading());
    fetch('https://inspaural-api.herokuapp.com/api/v1/inspaurals/' + inspId, {
      method: "DELETE",
      mode: "cors"
    }).then(dispatch({type: "DELETE_INSPAURAL", inspId: inspId}))
    .then(dispatch({type: "RESET_CURRENT_INSPAURAL"}))
  }
}

export const updateAmbienceId = (ambienceId, newAmbienceAudioUrl, newAmbienceImageUrl) => {
  return {
    type: "UPDATE_AMBIENCE_ID", ambienceId, newAmbienceAudioUrl, newAmbienceImageUrl
  }
}

export const updateAmbienceVolume = newAmbienceVolume => {
  return {
    type: "UPDATE_AMBIENCE_VOLUME", newAmbienceVolume
  }
}

export const updateQuoteId = (quoteNum, newQuoteId, newQuoteAudioUrl, newQuoteImageUrl) => {
  return {
    type: "UPDATE_QUOTE_ID", quoteNum, newQuoteId, newQuoteAudioUrl, newQuoteImageUrl
  }
}

export const updateQuoteVolume = (newQuoteVolume, quoteNum) => {
  let type = `UPDATE_QUOTE_VOLUME`;
  return {
    type, quoteNum, newQuoteVolume
  }
}

export const resetQuotes = () => {
  return {
    type: "RESET_QUOTES"
  }
}

export const updateInspauralName = name => {
  return {
    type: "UPDATE_INSPAURAL_NAME", name: name
  }
}

export const saveInspauralToDb = data => {
  return dispatch => {
    return fetch('https://inspaural-api.herokuapp.com/api/v1/inspaurals', {
      method: "POST",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(json => dispatch({type: "ADD_INSPAURAL", newInspaural: json}))
  }
}
