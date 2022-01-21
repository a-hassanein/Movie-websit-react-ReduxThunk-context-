import {combineReducers} from "redux";
import MovieReducer from "./reducer";
import getMovieReducer from "./Apidata_reducer";

export default combineReducers ({
    actionOnMovie: MovieReducer,
	allDataMovies: getMovieReducer
})