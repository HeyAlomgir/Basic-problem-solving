function second(arr){
    const sorted = arr.sort( (a,b) => b - a);
    return sorted[6];
}
console.log(second([10,22,33,44,55,66,77]));