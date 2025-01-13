const vowels = ["a", "e" , "i" , "o" , "u" , "A", "E", "I", "U", "O"]

const countVowels = (string) => {
    let count = 0;

    for(const char of string){
        if(vowels.includes(char)){
            count++
    }
    return console.log("Number of vowels",count)
    }
}

countVowels("HellowWorld")