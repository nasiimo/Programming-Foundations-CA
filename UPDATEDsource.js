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

let musicianArray =[musicianOne, musicianTwo, musicianThree, musicianFour ];

for (var i = 0; i < 1; i++) {
  console.log(musicianArray)
};


let addMusician = {
  name: "Rihanna",
  albums: 8,
  vitalStatus: "Alive"
};

musicianArray.push(addMusician);


//Looping through each object from the array musicianArray to check vital statuses and the log to the console



for (let musician of musicianArray) {
  if(musician.vitalStatus === `Alive`){
    console.log(`I look forward to hearing more from ${musician.name}`);
  } else {
    console.log(`${musician.name} will be missed`);
  }
}
