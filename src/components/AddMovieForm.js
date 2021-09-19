

import React, { useState } from 'react';
import { addMovie } from './../actions/movieActions';
import { connect } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import movies from '../data';

const AddMovieForm = (props) => {
    const { push } = useHistory();

    const [movie, setMovie] = useState({
        title: "",
        director: "",
        genre: "",
        metascore: 0,
        description:""
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMovie(movie)
        push('/movies/')
    }

    const { title, director, genre, metascore, description } = movie;
    return(<div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
                        </div>
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add"/>
                        <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default connect(null, {addMovie})(AddMovieForm);  // Not sure why this is null.





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@








// import React, { useState } from 'react';
// import { addMovie } from './../actions/movieActions';
// import { connect } from 'react-redux';


// import { Link, useHistory } from 'react-router-dom';



// const AddMovieForm = (props) => {

// console.log("🚀 ~ file: AddMovieForm.js ~ line 10 ~ AddMovieForm ~ props", props)

//     const { push } = useHistory();
    
//     const [movie, setMovie] = useState({
//         title: "",
//         director: "",
//         genre: "",
//         metascore: 0,
//         description:""
//     });
    
//     // console.log("AddMovieForm ~ movie", movie) // all the keys and empty strings as seen above. Must click 'add new movie' to trigger .log


//     const handleChange = (e) => {
//         setMovie({
//             ...movie,
//             [e.target.name]: e.target.value
//         });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.AddMovie(movie);
//         push('/movies/')  // I do not get this line 100% yet.
//     }

//     const { title, director, genre, metascore, description } = movie;
//     return(<div className="col">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <form onSubmit={handleSubmit}>
//                     <div className="modal-header">						
//                         <h4 className="modal-title">Add Movie</h4>
//                     </div>

//                     <div className="modal-body">					
//                         <div className="form-group">
//                             <label>Title</label>
//                             <input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
//                         </div>
//                         <div className="form-group">
//                             <label>Director</label>
//                             <input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
//                         </div>
//                         <div className="form-group">
//                             <label>Genre</label>
//                             <input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
//                         </div>
//                         <div className="form-group">
//                             <label>Metascore</label>
//                             <input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
//                         </div>		
//                         <div className="form-group">
//                             <label>Description</label>
//                             <textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
//                         </div>
                        			
//                     </div>
//                     <div className="modal-footer">
//                         <input type="submit" className="btn btn-success" value="Add"/>
//                         <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>);
// }


// export default AddMovieForm;


// // const mapStateToProps = (state) => {

// //     return {
// //         movies: state.movies
// //     }
// // console.log("🚀 ~ file: AddMovieForm.js ~ line 80 ~ mapStateToProps ~ state", state)
// // }


// // export default connect(mapStateToProps, { addMovie }) (AddMovieForm)

// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@