import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
// import { deleteMovie } from '../actions/movieActions';

const MovieHeader = (props) => {
// console.log("MovieHeader.js ~ props", props) // appTitle: "IMDB Movie Database"
    const appTitle = props.state.appTitle
    const displayFavorites = true;
    
    // console.log(appTitle); = // IMDB Movie Database
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {  }) (MovieHeader);