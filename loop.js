
// Feature              	for...in 🔑	             for...of 📦
// Returns                	Keys / Index	          Values
// Best for              	Objects	Arrays,           Strings
// Example              	0,1,2                   	a,b,c






// let user = {
//   name: "Hanan",
//   age: 20
// };
// for(let x in user){
//     console.log(x,user[x])
// }


// let arr = [1,2,3,4,5,6];

// for(let x in arr){
//     console.log(arr[x])
// }

// for(let x of arr){
//     console.log(x)
// }

// let arr = [10, 20, 30];

// for (let i in arr) {
//   console.log(i);   
// }

// for (let v of arr) {
//   console.log(v);   
// }


// let nums = [1, 2, 3, 4];

// for(let x of nums){
//     console.log(x*2)}


let names = ["hanan", "ali", "john"];

let upper = names.map(x=>x.toUpperCase())
console.log(upper)

