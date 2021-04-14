/* TODO
Create a function that tallys the sum of an objects values
14/04
Asti Maera */
function likeTally(obj) {
    let arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push((obj[prop]))
        }
    }
    let total = (`${arr[0] - arr[1]}`)
    return total
}
console.log(likeTally({ likes: 12, dislikes: 15, }))
// const likeSum = obj => Object.values(obj).reduce((a, b) => a - b);
// console.log(likeSum({likes: 12, dislikes : 4}))
