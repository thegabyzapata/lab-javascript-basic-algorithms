// Iteration 1: Names and Input
var hacker1 = "Gaby";
console.log("The driver´s name is " + hacker1);
var hacker2 = "Zapata";
console.log("The navigator´s name is " + hacker2);


// Iteration 2: Conditionals
var hacker1counter = hacker1.length;
var hacker2counter = hacker2.length;

if (hacker1.length === hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1counter + " characters!!")
  } else if (hacker1.length < hacker2.length) {
    console.log("The navigator got the longest name, it has " + hacker2counter + " characters")
  } else if (hacker1.length > hacker2.length) {
    console.log ("The Driver has the longest name, it has " + hacker1counter + "  characters");
  }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

var hacker1Capitals = "";

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase().toString()); 
    console.log(hacker1Capitals);
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var hacker1NameReversed = hacker1.split("").reverse("").join("");
console.log(hacker1NameReversed);

//3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both got the same name?");
    } 

    // Bonus Time!
// Generate 3 paragraphs. Store the text in a variable type of string.
var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt id elit pulvinar viverra. Sed nulla ligula, posuere tempus urna a, venenatis tincidunt nisl. Etiam vestibulum egestas nunc, non egestas arcu fringilla malesuada. Etiam magna dui, tristique ut dui sit amet, varius auctor nulla. Praesent ac sem purus. 
Nullam vehicula lobortis blandit. Vestibulum rhoncus ante tempus libero placerat, eget volutpat velit viverra. Nullam bibendum lobortis mi, sed ultrices erat mattis id. Fusce nec ex nec justo vestibulum euismod. Integer tincidunt sit amet erat eu feugiat. Donec orci elit, posuere et sem et, dignissim egestas mauris.
Aenean ultrices fringilla mi sed condimentum. Integer euismod, lectus vitae tincidunt porta, metus urna hendrerit tellus, nec fringilla mi metus a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis orci placerat, auctor ante varius, finibus urna.`;
console.log(loremIpsum);


// Make your program count the number of words in the string.
function wordCount(loremIpsum) { 
  return loremIpsum.split(" ").length;
}
console.log(wordCount(loremIpsum));

var etWord = "et";
var countEtWord = loremIpsum.split(etWord).length - 1;
console.log(countEtWord); 