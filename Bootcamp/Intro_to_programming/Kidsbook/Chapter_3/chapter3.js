//Arrays


// let dinosaurs = [
//     "T-Rex", 
//     "Velociraptor", 
//     "Stegosaurus", 
//     "Triceratops", 
//     "Brachiosaurus", 
//     "Pteranodon", 
//     "Apatosaurus", 
//     "Diplodocus", 
//     "Compsognathus"
// ];

// alert(" last dinasaur is " + dinosaurs [dinosaurs.length-1]);
// alert(" the fourth dinosaur is " + dinosaurs[3]);
// alert(" the 7th dinosaursis " + dinosaurs[6]);

// dinosaurs[0] = "Tyrannosaurus Rex";
// alert ("after the change, the 1st dinosaur is " + dinosaurs[0])

// console.log(dinosaurs);

// let dinosaurs =[];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

// Mixing Data Types in an Array

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];


// console.log(dinosaursAndNumbers[2][0]);

// console.log(dinosaursAndNumbers[2][2]);

// console.log(dinosaursAndNumbers[3]);

// console.log(dinosaursAndNumbers[2][1])

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs[maniacs.length-1]);
// console.log(maniacs.length)

// let animals =[];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length);
// animals.unshift("Monkey");
// animals.unshift("Polar Bear");
// console.log(animals);

// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);

// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];
// let furryAndScalyAnimalsAndFeatherdAnimals = furryAnimals.concat(scalyAnimals,scalyAnimals);

// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(featheredAnimals);
// console.log(furryAndScalyAnimalsAndFeatherdAnimals);

// let colors = ["red","green","blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("purple"));

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join(" "))
// console.log(boringAnimals.join(" - "))
// console.log(boringAnimals.join(" * "));
// console.log(boringAnimals.join(" sees "))

// let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// console.log(myNames.join(" "));
// console.log(myNames.join( " - "));
// console.log(myNames.join(" * "));
// console.log(myNames.join( " sees "));

//using Math.random Will always not be lower as 1

// let randomNumber = Math.random();  // (Can do it like this before console)

// console.log(Math.random() *11);  //(This is doing it in console) When by 11 you will get 10 as a answer


//Math.floor Cut of the desimals 

// console.log(Math.floor(Math.random() * 10) +1) // *(Math.floor(Math.random() * 11)) Math.random will work first then Math.floor will work//
                                            // *+1 will allow it not to het 0//

//  let randomWords = ["Explosion", "Cave", "Princess", "Pen", "Choclotae", "Car", "House" ];
//  let randomIndex = Math.floor(Math.random() * randomWords.length); //* add randomWords.lengt wil count the array that you don't have to count it//
//  alert(randomWords[randomIndex]); 

// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today?",
//     "Computer says no."
//     ];

// console.log(phrases[Math.floor(Math.random() * phrases.length)]);
//Getting the random word from different arrays there are 5 and to run this code console.log(phrases[Math.floor(Math.random() * phrases.length)]); //

// let index = Math.floor(Math.random() * phrases.length);
// console.log(phrases[index]);

//Random INSALT GENERATOR

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];


// Pick a random body part from the randomBodyParts array:

// let word1 = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let word2 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let word3 = randomWords[Math.floor(Math.random() * randomWords.length)];

// let randomInsult = " Your " + word1 + " is like a " + word2 + " " + word3 + " ! ";

// console.log(randomInsult);


// PROGRAMING CHALLENGES ??

let number = [3,2,1].join(" bigger than ");
let randomBodyParts = [" Tung " , " Nose " , " Eyes"];
let randomAdjectives = [" Longer " , " Biger " , " Boring "];
let randomAnimals = [" Dog " , " Cat " , " Llama " , " Rat "];
let randomAnimalsBodyPart = [" But " , " Nose " , " Legs " , " Tail "];

let word11 = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let word22 = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let word33 = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let word44 = randomAnimalsBodyPart[Math.floor(Math.random() * randomAnimalsBodyPart.length)];

//let randonInsult = " Your " + word11 + " is more " + word22 + " than a " + word33 + word44 + " !"

let randomInsult = ["Your ",word11," is more",word22," than a",word33,word44,"!"].join(" ");

console.log(randomInsult);

// Progress 4

console.log(number);


