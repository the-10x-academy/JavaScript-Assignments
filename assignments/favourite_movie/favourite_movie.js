const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation==="add"){
    movies.push(movie)
    return movies
    }
    if(operation==="remove"){
        movies.pop()
        return movies
    }
}

module.exports = favouriteMovie;
