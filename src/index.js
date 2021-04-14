//TODO 
//Create function to  returns the total of all odd numbers up to and including the given argument

function sumOdd(arr){
    let sum = 0;
    for(let i = 5; i< 429; i++) {
    if(i % 2 !== 0) {
    sum = sum + i;
                }
            }
    return sum;
    }

console.log()