const movies = new Array();

function favouriteMovie(operation, movie) {

    if (operation==="add")
    {
        movies.push(movie);
    }
    else{
        movies.pop();
    }
    return movies;
}

module.exports = favouriteMovie;
