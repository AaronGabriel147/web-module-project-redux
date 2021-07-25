import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';


// Find the HTML element that should trigger a deletion in the movie component.
// Create and connect the necessary event handlers to call deleteMovie on the current movie's id. 
// After setting the state, redirect the user using the push('/movies') command.



const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // console.log('Movie.js: props', props);

    // const movies = [];
    const movie = props.state.movies.find(movie => movie.id === Number(id));
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        {/* Below is where we delete... But how....? */}
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

// You can also use mapActionsToProps instead of putting them in the curlies below.
// This is useful because mapActionsToProps throws an error if there is a bug, whereas the latter does not. 
//                     STATE              ACTIONS       WHERE WE WANT TO USE THESE THINGS.
export default connect(mapStateToProps, { deleteMovie })(Movie);