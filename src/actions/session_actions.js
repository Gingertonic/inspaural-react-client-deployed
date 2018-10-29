const loading = () => {
  return {
    type: "LOADING"
  }
}

export const fetchInspaurals = () => {
  return dispatch => {
    dispatch(loading());
    return fetch('https://inspaural-api.herokuapp.com/api/v1/inspaurals')
      .then(resp => resp.json())
      .then(inspaurals => dispatch({type: "FETCH_INSPAURALS", inspaurals}))
  }
}
