const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    if(operation==="add"){ 
    movies.push(movie)
    return movies 
    }
    if(operation==="remove"){
        m = arrayRemove(movies, movie)
        return m
    }
}

module.exports = favouriteMovie;
