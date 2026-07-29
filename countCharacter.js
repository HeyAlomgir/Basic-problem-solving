function countChar(str){
    let count = 0;
    const char = "g";

    for(let c of str){
        if(char.includes(c)){
            count ++;
        }
    }
    return count ;

}
console.log(countChar("programming","g"));