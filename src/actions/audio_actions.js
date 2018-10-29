const loading = () => {
  console.log("loadingQuotes hit in actions")
  return {
    type: "LOADING"
  }
}

export const fetchQuotes = () => {
  console.log("fetchQuotes hit in actions")
  return dispatch => {
    console.log("about to dispatch loadingQuotes from fetchQuotes in actions")
    dispatch(loading());
    return fetch('/quotes')
      .then(resp => resp.json())
      .then(quotes => dispatch({type: "FETCH_QUOTES", quotes}))
  }
}

export const fetchAmbiences = () => {
  console.log("fetchAmbiences hit in actions")
  return dispatch => {
    console.log("about to dispatch loading from fetchAmbiences in actions")
    dispatch(loading());
    return fetch('/ambiences')
      .then(resp => resp.json())
      .then(ambiences => dispatch({type: "FETCH_AMBIENCES", ambiences}))
  }
}
