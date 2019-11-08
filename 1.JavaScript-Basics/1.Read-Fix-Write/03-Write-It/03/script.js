/** Show a list of the last 10 Oscar winners for best actor.
 * Sort the list by the age of the winner (oldest first)
 * What's the combined age of all Oscar winners. Log this to the console.z*/


const movies = [{
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
}, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
}, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
}, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
}, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
}, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
}, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
}, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
}, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
}, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
}];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ul>`);
movies.sort(function(a, b) { return b - a });
movies.forEach(movie => document.write(wrapWithTag(movie.actor, `li`)));
document.write(`</ul>`);