import { MOVIE, REMOVED_MOVIES_LIST } from "../actions/MovieListActions"

const movieListInitialState=[]

const movieListReducer=(state=movieListInitialState, action)=>{
    switch(action.type){
        case MOVIE: return [...state, action.payload]
        case REMOVED_MOVIES_LIST: return [...action.payload]
        default: return [...state]
    }
}

export default movieListReducer