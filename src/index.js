/* TODO
Create a function that tallys the sum of an objects values
14/04
Asti Maera */

function likeTally(obj) { //declare function
    for (var prop in obj) { //for variable found in obj parameter
        if (obj.hasOwnProperty(prop)) //if the object has properties
            return obj.likes - obj.dislikes; //return the object key likes value minus the object key dislikes value.
    };
}; console.log(likeTally({ likes: 12, dislikes: 15, })); //print to console the calculated object value (-3)
// function likeTally(obj) {
//     let arr = [];
//     for (var prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             arr.push((obj[prop]))
//         }
//     }
//     let total = (`${arr[0] - arr[1]}`)
//     return total
// }

