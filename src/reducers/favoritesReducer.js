// -  favorites: an array of movie objects
// -  displayFavorites: a boolean that holds if favorite elements
// -  should be displayed in app


const initialValues = {
    favorites: [],
    displayFavorites: true
}


const favoritesReducer = (state = initialValues, action) => {
    // console.log(state) // nothing logs, not sure why

    switch (action.type) {


        default:
            return state

    }
}

export default favoritesReducer;



