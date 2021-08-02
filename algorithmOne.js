function reverseAString(word){
    let reverseWord = ""
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}

let finalReversedWord = reverseAString("Hello");
console.log(finalReversedWord);