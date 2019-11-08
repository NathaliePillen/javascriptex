const shows = [
    `legion`,
    `sneaky pete`,
    `santa clarita diet`,
    `riverdale`,
    `the young pope`,
    `a series of unfortunate events`,
    `taboo`,
    `colony`,
    `24: legacy`,
    `speechless`,
    `scherlock`,
    `stranger things`,
    `this is us`,
    `timeless`,
    `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
    /*const newTitle = uCFirst(title);
    console.log(title);
    document.write(wrapWithTag(newTitle, `li`));
    console.log(newTitle);*/
    // console.log(title);

    const newTitle = uCFirst(title);
    // document.write(newTitle);
    console.log(typeof newTitle);
    console.log(newTitle);
    document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
    const words = sentence.split(` `);
    //const letter = words.split(``);
    // console.log(typeof sentence);
    // console.log(typeof words);
    //console.log(letter);
    //console.log(words);
    //console.log(words[0]);
    /* words.forEach(element => {
        // const char = element.charAt(0);
        // const cap = char.toUpperCase();
        const first_word = words[0];
        console.log(first_word);
        const first_letter = first_word.charAt(0);
        const cap = first_letter.toUpperCase();

        // const textplus = words.slice(1);
        // console.log(textplus);
        //console.log(cap);
        // console.log(char);
        // console.log(`${element} + 1`)
    });
    */
    // console.log(words);
    var new_words = words.map(function(word) {
            // console.log(word.charAt(0).toUpperCase() + word.slice(1));
            test = word.charAt(0).toUpperCase() + word.slice(1);
            return test;
        })
        // console.log(new_words);
    new_words_joined = new_words.join(" ");
    // console.log(new_words_joined);
    /*words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join();*/
    return new_words_joined;
    //document.write(wrapWithTag(new_words_joined, `li`))

};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);







/*In this exercise we want every word in a title to start with a capital letter.
 * Look at the error message in the dev tools and fix it.
 * Look at the documentation of split().
 * Look at the documentation of charAt().
 * Look at the documentation of slice().
 * Adjust the function to get the desired result*/