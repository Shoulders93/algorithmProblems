// function reverseAString(word){
//     let reverseWord = ""
//     for(let i = word.length - 1; i >= 0; i--){
//         reverseWord += word[i];
//     }
//     return reverseWord;
// }

// let finalReversedWord = reverseAString("Hello");
// console.log(finalReversedWord);


function reverseThisString(string){
    let reverseWord = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverseWord += string[i];
    }
    return reverseWord;
}
let finalWord = reverseThisString(prompt("Pick a random word"));
console.log(finalWord);

// Hello, [0 1 2 3 4]
// 12345, word.length - 1 takes 5 -1 = 4, 4 = o in the word hello
// let word = "Hello";
// let reverseWord = word[word.length - 1];
// console.log(reverseWord);