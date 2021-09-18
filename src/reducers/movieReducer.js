import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

         // Sets state to initial state (I think)
const reducer = (state = initialState, action) => {
    // console.log('movieReducer.js: state & action', state, action);
    switch(action.type) {

        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item => (action.payload !== item.id))
            }

        case ADD_MOVIE:
            return {
                ...state
                // payload: 
            }    
            
            default:
                return state;
            }
        }
        
        export default reducer;
        