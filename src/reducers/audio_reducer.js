const loadingImage = "https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif"

const initState = {
  quotes: [
    {id: 1, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 2, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 3, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 4, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 5, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 6, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 7, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 8, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 9, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 10, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 11, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 12, author: "Loading...", text: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage}
  ],
  ambiences: [
    {id: 1, name: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 2, name: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 3, name: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage},
    {id: 4, name: "Loading...", audioUrl: "Loading...", imageUrl: loadingImage}
  ],
  loading: false
}


export default function audioReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return { ...state, loading: true}

    case "FETCH_QUOTES":
      console.log("FETCH_QUOTES hit in reducer")
      console.log(action.quotes)
      return { ...state, quotes: action.quotes, loading: false }

    case "FETCH_AMBIENCES":
      console.log("FETCH_AMBIENCES hit in reducer")
      console.log(action.ambiences)
      return { ...state, ambiences: action.ambiences, loading: false }

    default:
      return state
  }
}
