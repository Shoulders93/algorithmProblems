// break down the problem into steps
// First need to capitalize the words in the string

// let word = "hello World";
// let capitalizeWord = word.toUpperCase();
// console.log(capitalizeWord);

// however this capitalizes everything

// now i need to target a specific letter in a string

// let word ="hello world";
// let firstLetter = word.charAt(2);
// console.log(firstLetter);

// this specifically gets me the letter 'h', but not 'w' in world

// now lets combine them

// let word = "hello world"
// let capitalizeWord= word.charAt(0).toUpperCase();
// console.log(capitalizeWord);

// This gives me 'H' in hello world 
// I still need the rest of the string, not a specific letter

// If I am able to get 'H' how to I get the rest of the word 'ello'

// let word = "hello";
// let newWord = word.slice(3);
// console.log(newWord);

// this gets me 'ello'
// now I need to combine

// let word = "hello world!"
// let newWord = word.charAt(0).toUpperCase() + word.slice(1);
// console.log(newWord);

// this console logs 'Hello world!' but I still need to capitalize 'world'

//  let word = "hello world";
//  let newWord = word.split(" ");
//  console.log(newWord);

// this .split function turns my string into an array of strings

function capitalizeYourStringSentence(string){
    let word = string;
    let newWord = word.split(" ");
    for(let i = 0; i < newWord.length; i++){
        newWord[i] = newWord[i].charAt(0).toUpperCase() + newWord[i].slice(1);
    }
    let finalWord = newWord.join(" ");
    console.log(finalWord);
}
capitalizeYourStringSentence("hello world");