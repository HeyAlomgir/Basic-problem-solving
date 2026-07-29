function palinDrome(str){
    const palindrome = str.toLowerCase();
    let final = palindrome.split("").reverse().join("");

    if(final === palindrome){
        return true ;
    }else{
        return false ;
    }

}
console.log(palinDrome("madam"));
console.log(palinDrome("hello"));