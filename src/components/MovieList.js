import React from 'react';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions'


const MovieList = (props)=> {
// console.log(props.state.movies); // all data is in props... I don't think it should be/
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        props.state.movies.map(movie => <MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={props.length}/>
        </div>
    );
}

// We snag any data we want from the reducer:
const mapStateToProps = (state) => {
    // console.log('mapStateToProps, state', state.movies[0].title) // 1 movie.
    return {
        state: state
    }
}


export default connect(mapStateToProps, { deleteMovie }) (MovieList);