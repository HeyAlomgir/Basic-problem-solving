function Frequency(str,charToFind){
    let count = 0 ;

    for(let item of str){
        if(item === charToFind){
            count++;
        }
    }
    return count;
}
console.log("a :", Frequency("banana","a"));
console.log(Frequency("banana","b"));
console.log(Frequency("banana","n"));