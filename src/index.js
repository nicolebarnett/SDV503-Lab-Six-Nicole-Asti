//Task One - Nicole 15/04
//Create a function that takes a value and returns the sum of all odd values up to and including that value
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

/*Nicole 14/04
Create a function that filters strings from array */
function sorter(y) { //declare function 
    var filtered = y.filter(function(x) { //creating variable and 
        if (typeof(x) === 'number') //parameters to filter data type 
          return x; // return data if number
      });
      return filtered; // returns filtered array
    }
console.log(sorter(['gju',3,'68']))




