// script.js
/*
// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Reading", // Example hobby
  "Writing", // Example hobby
  // Add more hobbies
];

let index = 0;
while (index < hobbies.length) {
  // Log each hobby and see if it works in the console

  index++;
}
*/

for (let i=1; i <=10; i++) {
  console.log(`Number: ${i}`);
}

let hobbies = [
  "Reading",
  "Writing",
  "Cycling",
  "Hiking",
  "Cooking",
  "Drawing",
  "Gaming",
  "Gardening",
  "Photography",
  "Traveling"
];

let j = 0;
while (j < hobbies.length) {
  console.log(`Hobby ${j}: ${hobbies[j]}`);
  j++;
}