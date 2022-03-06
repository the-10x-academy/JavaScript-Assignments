const readline = require("readline-sync") 
movies=[]
function favoritemovie(operation,movie="default") {
    if(operation==="add") {
        movies.push(movie)
    }
    if(operation==="remove") {
        movies.pop()
    }
}
let n=parseInt(readline.question())
for(let i=0;i<n;i++) {
let operation=readline.question().split(" ")
if(operation[0]==="add" ){
favoritemovie(operation[0],operation[1])
}
else {
    favoritemovie(operation[0])
}
console.log(movies)
}
