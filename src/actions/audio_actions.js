const loading = () => {
  return {
    type: "LOADING"
  }
}

export const fetchQuotes = () => {
  return dispatch => {
    dispatch(loading());
    return fetch('https://inspaural-api.herokuapp.com/api/v1/quotes', {
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(quotes => dispatch({type: "FETCH_QUOTES", quotes}))
  }
}

export const fetchAmbiences = () => {
  return dispatch => {
    dispatch(loading());
    return fetch('https://inspaural-api.herokuapp.com/api/v1/ambiences', {
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(ambiences => dispatch({type: "FETCH_AMBIENCES", ambiences}))
  }
}
