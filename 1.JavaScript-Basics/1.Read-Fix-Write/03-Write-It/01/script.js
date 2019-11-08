//Make an array with all movies currently playing in 
//Studio Skoop http://www.studioskoop.be/overzicht_films
//Display the movies in an ul list.*/

//## EX 02
//* Continue with the list form the previous exercise
//* Transform the text to lowercase
//* Display the list in reversed order

const movies = [
    `Martin Eden`,
    `La Belle Époque`,
    `DocuLatino Ghent - Minga: Stemmen van Weerstand`,
    `Mijn Bijzonder Rare Week Met Tess`,
    `The Mustang`,
    `Joker`,
    `Downton Abbey`,
    `Parasite`,
    `Once Upon a Time… in Hollywood`,
    `Hors normes`,
    `Everest: De Jonge Yeti`,
    `Minuscule 2: Het Tropisch Avontuur`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;


document.write(`<ul>`);
movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ul>`);