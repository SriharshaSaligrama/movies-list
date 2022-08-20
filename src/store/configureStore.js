import { createStore, combineReducers, applyMiddleware } from "redux";
import movieSearchReducer from "../reducers/movieSearchReducer";
import movieListReducer from "../reducers/movieListReducer";

const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
};
  
const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
};

const persistedStore = loadFromLocalStorage();

const configureStore=()=>{
    const store=createStore(combineReducers({
        movieList: movieListReducer,
        movieSearch: movieSearchReducer
    }), persistedStore)

    store.subscribe(() => {
        saveToLocalStorage(store.getState());
    });

    return store
}

export default configureStore