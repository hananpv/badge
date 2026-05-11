
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


// let names = ["hanan", "ali", "john"];

// let upper = names.map(x=>x.toUpperCase())
// console.log(upper)


// let age = 13;

// if(age >= 18){
//     console.log("ADULT")
// }
// else{
//     console.log("MINOR")
// }



// let numbers=[1,2,3,4,5,6,7,8,9]

// let double = numbers
// .filter((x)=>x%2===0)
// .map((x)=>x*2)
// console.log(double) 



// let marks = [45,67,89,23,90]
// let highest = Math.max(...marks)
// let lowest= Math.min(...marks)
// console.log("highest :",highest,"lowest :",lowest)

// let total = marks.reduce((a,b)=>a+b,0)
// console.log(total) 
// let marks = [45,67,89,23,90]
// let average = total / marks.length;
// console.log(average)


// let users = [
//   {id:1, name:"Hanan", age:20},
//   {id:2, name:"Rahul", age:17},
//   {id:3, name:"Amal", age:25}
// ]

// for(let x of users){
//     console.log(x)
// }
// for(let y of users){
//     if(y.age>18){
//         console.log(y)
//     }
// }


// users.push({
//     id:4,
//     name:"unknown",
//     age:14
// })
// users[1].name="fasil"
// console.log((users))
// users.splice(1,4)
// console.log((users))

