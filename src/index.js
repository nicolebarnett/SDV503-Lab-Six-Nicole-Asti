//TODO 
//Create function to  returns the total of all odd numbers up to and including the given argument

function sumOdd(num){ //creating a function and its name is sumOdd and its parameter is num
    let arr = [] //creating an empty array 
    for(let i=0;i<=num;i++){ //create a for loop 
    if(i%2 !==0){ //check if number is odd
    arr.push(i) //if it cannot be divided by 2, push into array
    }
    }
    let result = arr.reduce((a,b)=> a+b) // using reduce method to get sum of array of number 
    return result //return
    }

console.log(sumOdd(13)) 
//print!