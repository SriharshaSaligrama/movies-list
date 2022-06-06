import { SEARCH_MOVIE } from "../actions/MovieSearchActions"

const searchInitialState=''

const movieSearchReducer=(state=searchInitialState, action)=>{
    switch(action.type){
        case SEARCH_MOVIE: return action.payload
        default: return state
    }
}

export default movieSearchReducer