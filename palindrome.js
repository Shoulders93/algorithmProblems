// create a function to determine if a string is a Palindrome

// palindrome is a word, or phrase, that reads the same backwards as it does forward (example; madam)
// need to write code that takes a users input to determine if it is a palindrome
// need to report the result;


function determineIfPalindrome(word){
    for(i = 0; i < word.length / 2; i++){ // added / 2 so entire word does not print out in console;
        console.log(word[i]); // print entire string so user can see the word they inputted
        if(word[i] !== word[word.length -1 -i]){ // If first letter is not equal to last letter
            return "This is not a Palindrome";
        }
    }
    return "This is a Palindrome";
}
let endValue = determineIfPalindrome(prompt("Please enter a word"));
console.log(endValue);

