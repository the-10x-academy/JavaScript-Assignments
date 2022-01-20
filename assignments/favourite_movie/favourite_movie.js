const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation=="add"){
        movies.push(movie);
        // return movies;
    }else if(operation == "remove"){
        movies.pop();
        // return movies;
    }
    return movies;
}
module.exports = favouriteMovie;
