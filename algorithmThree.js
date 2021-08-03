// Compress a string of characters
// Need to break down the problem that I am trying to solve.
// If multiple letters are in a row, then need to print how many of those letters
// are there, then print that letter after the count of that letter

function compressThisString(string){
    let output = ""; // output has to be set to "" else it will print 'undefined' in console the first time
    let counter = 0;
    for(i = 0; i < string.length; i++){
        counter++; // keeps counting up from 0;
        if(string[i] != string[i + 1]){ // if letter in string is not equal to next letter,,
            output += counter + string[i]; // then output will be equal to counter plus the letter in the string;
            counter = 0; // counter has to be restated at 0 each time else it will keep counting all the total characters and not just the specific letter we are trying to count;
        }
    }
    console.log(output); // since output was declared with nothing in it console will print how many characters are in a row until the 
} // same letter doesnt match

compressThisString("aaaaabbbbbb");


function compressAnotherString(string){
    let output = "";
    let counter = 0;
    for(i = 0; i < string.length; i++){
        counter++;
        if(string[i] != string[i+1]){
            output += counter + string[i];
            counter = 0;
        }
    }
    console.log(output);
}

compressAnotherString("aaaaabbbbbccccc");