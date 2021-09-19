import React from 'react';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions'


const MovieList = (props)=> {
console.log('MovieList', props.state.movieReducer.movies); 
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                </tr>
                </thead>

                <tbody>
                    {
                        props.state.movieReducer.movies.map(movie => <MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={props.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log('mapStateToProps, state', state.movies[0].title) // 1 movie.
    return {
        state: state
    }
}


export default connect(mapStateToProps, { deleteMovie }) (MovieList);