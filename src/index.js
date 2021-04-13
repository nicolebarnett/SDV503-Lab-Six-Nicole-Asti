//Nicole driver
//TODO 
//create function 
// return odd numbers 
function oddbois(x) {
    const arr = []
    for(var i = 0; i <= x.length; i++) {
        if (x % 2 !== 0 ) {
            arr.push(x)
        }
    }
}
//console.log(add[5, 2, 3])


//TODO 
//Create function that filters strings from array 
function sorter(y) { //declare function 
    var filtered = y.filter(function(x) { //creating variable and 
        if (typeof(x) === 'number') //parameters to filter data type 
          return x; // return data if number
      });
      return filtered; // returns filtered array
    }
console.log(sorter(['gju',3,'68']))
