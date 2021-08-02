// create a function to determine if a string is a Palindrome
// let word = "Hello World";
// console.log(word);


function isThisAPalindrome(word){
    for(let i = 0; i < word.length; i++){
        console.log(word[i]);
        console.log(word[word.length- i - 1]);
        if(word[i] !== word[word.length - i - 1]){
            return false;
        }
    }
    return true;
}

console.log(isThisAPalindrome(prompt("Please enter a word")));