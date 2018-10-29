const loadingImage = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4321112/580/386/m1/fpnw/wm0/paper_question_mark_logo_template-03-.png?1524123254&s=16fbcdc7bbae4cf8368e72fc77a04dbe"

const initState = {
  id: 0,
  name: "New Inspaural",
  selectedQuoteIds: [6, 7, 10, 11],
  quote1: {quoteNum: 1, id: 6, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote2: {quoteNum: 2, id: 7, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote3: {quoteNum: 3, id: 10, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote4: {quoteNum: 4, id: 11, volume: 40, audioUrl: "", imageUrl: loadingImage},
  selectedAmbience: {id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    case "LOADED":
      return {...state, loading: false}

    case "FETCH_INSPAURAL":
      console.log(action.inspaural)
      return {
          id: action.inspaural.id,
          name: action.inspaural.name,
          selectedQuoteIds: action.inspaural.quotes.map(q => q.id),
          quote1: {...state.quote1, id: action.inspaural.quotes[0].id, volume: action.inspaural.quote1_vol, audioUrl: action.inspaural.quotes[0].audioUrl, imageUrl: action.inspaural.quotes[0].imageUrl},
          quote2: {...state.quote2, id: action.inspaural.quotes[1].id, volume: action.inspaural.quote2_vol, audioUrl: action.inspaural.quotes[1].audioUrl, imageUrl: action.inspaural.quotes[1].imageUrl},
          quote3: {...state.quote3, id: action.inspaural.quotes[2].id, volume: action.inspaural.quote3_vol, audioUrl: action.inspaural.quotes[2].audioUrl, imageUrl: action.inspaural.quotes[2].imageUrl},
          quote4: {...state.quote4, id: action.inspaural.quotes[3].id, volume: action.inspaural.quote4_vol, audioUrl: action.inspaural.quotes[3].audioUrl, imageUrl: action.inspaural.quotes[3].imageUrl},
          selectedAmbience: {id: action.inspaural.ambience.id, volume: action.inspaural.ambience_vol, audioUrl: action.inspaural.ambience.audioUrl, imageUrl: action.inspaural.ambience.imageUrl},
          loading: false
        }

    case "UPDATE_INSPAURAL_NAME":
      console.log("in reducer and handling name change to " + action.name)
      return { ...state, name: action.name}

    case "RESET_QUOTES":
      return {
        ...state,
        selectedQuoteIds: [0, 0, 0, 0],
        quote1: {quoteNum: 1, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote2: {quoteNum: 2, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote3: {quoteNum: 3, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote4: {quoteNum: 4, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage}
      }

    case "RESET_CURRENT_INSPAURAL":
    return {
      id: 0,
      name: "New Inspaural",
      selectedQuoteIds: [6, 7, 10, 11],
      quote1: {quoteNum: 1, id: 6, volume: 40, audioUrl: "", imageUrl: loadingImage},
      quote2: {quoteNum: 2, id: 7, volume: 40, audioUrl: "", imageUrl: loadingImage},
      quote3: {quoteNum: 3, id: 10, volume: 40, audioUrl: "", imageUrl: loadingImage},
      quote4: {quoteNum: 4, id: 11, volume: 40, audioUrl: "", imageUrl: loadingImage},
      selectedAmbience: {id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
      loading: false
    }

    case "UPDATE_AMBIENCE_ID":
      console.log("once in reducer, ambi id is " + action.ambienceId)
      if (action.ambienceId === 0){
        return {...state, selectedAmbience: {id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage}, loading: false}
      } else {
        return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId, audioUrl: action.newAmbienceAudioUrl, imageUrl: action.newAmbienceImageUrl}, loading: false}
      }

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.newAmbienceVolume}, loading: false}

    case "UPDATE_QUOTE_ID":
      switch(action.quoteNum) {
        case 1:
          state.selectedQuoteIds[0] = action.newQuoteId
          return {...state, quote1: {...state.quote1, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 2:
          state.selectedQuoteIds[1] = action.newQuoteId
          return {...state, quote2: {...state.quote2, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 3:
          state.selectedQuoteIds[2] = action.newQuoteId
          return {...state, quote3: {...state.quote3, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 4:
          state.selectedQuoteIds[3] = action.newQuoteId
          return {...state, quote4: {...state.quote4, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        default:
          return state
      }

    case "UPDATE_QUOTE_VOLUME":
      console.log("quoteNum is " + action.quoteNum)
      switch(action.quoteNum) {
        case 1:
          return {...state, quote1: {...state.quote1, volume: action.newQuoteVolume}, loading: false}

        case 2:
          return {...state, quote2: {...state.quote2, volume: action.newQuoteVolume}, loading: false}

        case 3:
          return {...state, quote3: {...state.quote3, volume: action.newQuoteVolume}, loading: false}

        case 4:
          return {...state, quote4: {...state.quote4, volume: action.newQuoteVolume}, loading: false}

        default:
          return state;
      }

    default:
      return state
  }
}
