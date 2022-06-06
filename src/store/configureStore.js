import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import movieSearchReducer from "../reducers/movieSearchReducer";
import movieListReducer from "../reducers/movieListReducer";

const configureStore=()=>{
    const store=createStore(combineReducers({
        movieList: movieListReducer,
        movieSearch: movieSearchReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore