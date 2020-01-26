/* Theory:  What is an object?
An object is in JavaScript is "holder" of different data.
Practical:  Create an object for a musician with the properties of:
name, number of albums, and whether they are alive or not. */

let musicianOne = {
  name: "Ariana Grande",
  albums: 10,
  vitalStatus: "Alive"
};


let musicianTwo = {
  name: "Post Malone",
  albums: 3,
  vitalStatus: "Alive"
};

let musicianThree = {
  name: "Justin Bieber",
  albums: 4,
  vitalStatus: "Alive"
};

let musicianFour = {
  name: "Justin Timberlake",
  albums: 5,
  vitalStatus: "Alive"
};

/* Theory:  What is an array?
An array lets you store different type of data under one variable.
Practical:  Create an array of musicians including the object created above.
In total there should be 4 musicians in the array.
*/



let musicianArray =[musicianOne, musicianTwo, musicianThree, musicianFour ];

/* Theory: What is a for loop?
A for loop will continue to execute as long as the condition is true. It will stop being executed when the condition becomes false.
Practical: Using a for loop, go over the array created above and console.log out each musician’s name and number of albums.
It should read "XXXX has released XXXX number of albums".
*/

for (var i = 0; i < 1; i++) {
  console.log(musicianArray)
};

/* Theory: What is a function?
A function is a building block of JavaScript that executes a set of statements when called.
Practical: Create a function which adds a musician to your array.
The new musician must be passed into the function as an argument.
Use the push() method to add to your array.
*/

let addMusician = {
  name: "Rihanna",
  albums: 8,
  vitalStatus: "Alive"
};

musicianArray.push(addMusician);

/*
Theory:  What is a conditional statement?
A conditional statement executes a specific block of code if the condition is true.
And will execute another specific block of code if the condition is false.
Practical:  Create a conditional statement which tests whether the musician is alive or not.
If they are alive log out "I look forward to hearing more from XXXX" and if they are no longer
alive "XXXX will be missed"
*/

if(musicianOne.vitalStatus==="Alive", musicianTwo.vitalStatus==="Alive", musicianThree.vitalStatus==="Alive", musicianFour.vitalStatus==="Alive",
    addMusician.vitalStatus==="Alive"){
      console.log("I look forward to hearing more from" + " " + musicianOne.name);
      console.log("I look forward to hearing more from" + " " + musicianTwo.name);
      console.log("I look forward to hearing more from" + " " + musicianThree.name);
      console.log("I look forward to hearing more from" + " " + musicianFour.name);
      console.log("I look forward to hearing more from" + " " + addMusician.name);


} else{
  console.log(musicianOne.name + " " + "will be missed");
  console.log(musicianTwo.name + " " + "will be missed");
  console.log(musicianThree.name + " " + "will be missed");
  console.log(musicianFour.name + " " + "will be missed");
  console.log(addMusician.name + " " + "will be missed");
}
