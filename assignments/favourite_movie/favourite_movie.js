const movies = [];

function favouriteMovie(operation, movie) {
    if (operation == "add"){

        movies.push(movie);}
    else{
        movies.pop(movie)}
    return movies

}
module.exports = favouriteMovie;
