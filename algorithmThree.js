// let word = "Hello";
// console.log(word);

// let word = "aaaaabbbbbbcccccccdddddd";
// console.log(word);

function compressThisString(string){
    let output = "";
    let count = 0;
    for(let i = 0; i < string.length; i++){
        count++;
        if(string[i] != string[i+1]){
            output += string[i] + count;
            count = 0;
        }
    }
    console.log(output);
}

compressThisString(word);