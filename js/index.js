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