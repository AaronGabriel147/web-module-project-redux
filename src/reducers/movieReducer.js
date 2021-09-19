import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

         // Sets state to initial state (I think)
const reducer = (state = initialState, action) => {

// console.log("🚀 ~ file: movieReducer.js ~ line 11 ~ reducer ~ state", state)

    switch(action.type) {

        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item => (action.payload !== item.id))
            }
            
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }    
            
            default:
                return state;
            }
}
   
export default reducer;


