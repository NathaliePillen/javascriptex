# Read It

Clone this repository to your desktop and answer the questions in the readme file. 

Each `Read It` exercice focusses on a different functionality and gives an example of how to use it.

Make sure you understand what's happening. When in doubt, use the documentation on [MDN](https://developer.mozilla.org/bm/).



* [01](./01/) 

*<script>
	document.write(`<h1>Top 10 Greatest Movies of All Time</h1>`);
</script>

The document.write() method writes a string of text to a document. The style is given by <h1>.




* [02](./02/)

*Open index.html in your browser. What is the difference between this and the previous example?

there is a seperate .js file

*Do you notice a difference between the 2 document.write lines?
in the first line there is a the amount of 20
in the second line there is a calculation with the amount 20 
in the first line there is a dubble apostrophe
in the second line there is a backtick

*Look at the 'Template literals' documentation
new way to create a string
To create a template literal, we use the backtick (`) character.
let newString = `A string`;
+ create multi-line strings
console.log(`string text line 1 string text line 2`);
+ expressions / placeholders $ {}
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);




* [03](./03/)

*Open script.js and try to predict the result of the script. Explain.

displays numbers 1 to 10

for-loop : 
initializer: i starts at position 0
condition: i < amount (here 10)
after running code go to i++ (here 0+1)
now i =1 and the loop starts over again until i ===10


console.log(i): gives the starting-number of i in the console
0

document.write : writes down as a paragraph i+1

So the first result is 
1 (0+1)
now i = 1 and the loop starts again
when the result is 10 the loop stops


*Open the developer tools in your browser and inspect the 'console' tab.

console.log gives you the values of i 
so here it is 0 to 9




* [04](./04/)

*Open script.js and read the code. What do you think will happen. Try to explain in your own words.

you will get a list of the movies with a number 
1 name of the movie
2 name of the movie
upto
10 name of the movie

a const movies is defined as an array (list of titles of movies)

document.write will write down an ordered list of movie-titles
if the movie-title succeeds the test of the loop. So you get a numbered list 1 to 10

for-loop
we start at position 0 so that is the first title 'The Godfather'.
This position is smaller than movies.length (10) 
after running the loop you go to the next position in the array.

when you succeed the test above
then document.write: writes down the movie-title as a <li>-item




* [05](./05/)

*The for-loop is no longer present. 
  What was it replaced with? How does this work?

It has been replaced by two functions
wrapWithTag and parseTitle

*What does the function 'parseTitle' do? 
  What parameter do we pass to this function?

  maakt const aan met naam lowerTitle en maakt van de title kleine letters
  maakt const aan met naam wrapped en plaatst de lowerTitle en li in de wrapWithTag-functie
  schrijft wrapped neer
  
  
*What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?

maakt const aan met naam wrapWithTag die de content en de tagname weergeven
schrijft dit neer in de console
geeft deze waarde weer als tagname-content-tagname

placeholders
de waarden moeten uiteindelijk weergegeven worden in movies.forEach al <li>content</li>




* [06](./06/)  

*Notice the difference with the previous exercise. What changed?

movies.forEach(movie => document.write(wrapWithTag(movie.toLowerCase(), `li`)));

the functions are in the function forEach



* [07](./07/)

*Look at the documentation of the map() function
What's the difference between this and the previous exercise?

the title of the movie has put into lowercase by the map() function




* [08](./08/)

* Look at the documentation of the join() function. Explain how it is used here.

it puts together the value of the contst wrappedMovies and the ordered list




* [09](./09/)

* Notice how the 2 map functions are attached to eachother, this is called 'method chaining'


* What does the parseTitle function do exactly?
it puts the title of the movie in lowerCase
If the title starts with the
then show in the console 'Film met THE:' and title
If the title starts with the then put the title in uppercase

* Notice how all the code is in the shape of 
functions.




* [10](./10/)

*Look at the documentation of the filter() function and explain how it's used here.

the filter function creates an array with elements that pass the test
here the test is the title has to start with 'the'
every movie that start with the is in the list




* [11](./11/)

*What's the difference with the previous exercises? What are we dealing with here?

the variabel movies is an array with keys and values


*Where exactly do we define to only render the title

in the map() function
only the key title is asked




* [12](./12/)

*Notice the difference with the previous exercise.

movie.title
movie.year
movie.director


*Why is there no 'return' in the parseMovieData function?

the elements are put in a paragraph


* [13](./13/)

*Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 

for (const prop in movie)
we look in the keys of the object

we don't use forEach because the properties are
3 different things and we need something more general



*Look at the documentation of for...in

for/in - loops through the properties of an object

for (var in object) {
  code block to be executed
}



*Look at the documentation of the .sort(à function. Explain how it's applied here.

the movies are sorted from old to new
.sort(orderByYear)


*Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

2 times console.table()
to control if the list was sorted well


* [14](./14/)

*Look at the reduce() function and research how it works exactly.
reduce() reduces the array to a single value

*Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.

you have to give the startposition 0 where to count the total capacity 


*What are we doing with the object that's passed to 'calculateAvailable'?

calculates the available capacity of the theatre
