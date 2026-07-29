function Capitalize(str){
    const words = str.split(" ");
    
    const CapitalizeWords = words.map(word => {
        return word.charAt(0).toUpperCase()+word.slice(1);
    })
    return CapitalizeWords.join(" ");
}
console.log(Capitalize("alomgir hossain"));