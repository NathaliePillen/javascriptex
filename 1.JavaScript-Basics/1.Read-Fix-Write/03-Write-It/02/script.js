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
movies.reverse().forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));
document.write(`</ul>`);