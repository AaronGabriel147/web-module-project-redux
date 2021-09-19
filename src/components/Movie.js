import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory(); // ?
    const movies = props.movies
    console.log('Movie.js: props', props);
    const movie = movies.find(movie => movie.id === Number(id)); // Number means you are only looking for a number. 

    const deleteHandler = (id) => {
        props.deleteMovie(id)
        push("/movies")
    }

    return (<div className="modal-page col">
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
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input onClick={() => deleteHandler(movie.id)} type="button" className="m-2 btn btn-danger" value="Delete" /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer.movies
    }
}

// You can also use mapActionsToProps instead of putting them in the curlies below.
// This is useful because mapActionsToProps throws an error if there is a bug, whereas the latter does not. 
//                     STATE              ACTIONS       WHERE WE WANT TO USE THESE THINGS.
export default connect(mapStateToProps, { deleteMovie })(Movie);