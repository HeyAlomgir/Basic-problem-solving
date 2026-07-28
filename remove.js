// array strig duplicate 

function noDuplicateStr(arr){
    return [...new Set(arr)];
}

const names =["alomgir","abid","alomgir","talha","shariful","shariful","talha","abid"];
console.log("Name:",noDuplicateStr(names));

// array number duplicate deleete for loop;

function noDuplicate(arr){
    const uniq = [];
    for(let item of arr){
        if(!uniq.includes(item)){
            uniq.push(item);
        }
    };
    return uniq;
}
const numbers = [10,20,33,44,55,66,77,33,44,55,66,77];
console.log("Numbers:",noDuplicate(numbers))