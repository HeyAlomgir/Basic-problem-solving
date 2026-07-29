function sumOfArr(arr){
    let sum = 0;

    for(let s of arr){
        sum = sum + s;
        
    }
    return sum;

}
console.log(sumOfArr([10,20,30,40]));