// 019. Date Functions Provided by Javascript

var date = new Date() //current Date
console.log(date) //2020-05-23T18:24:42.365Z
console.log(date.toDateString()) //Sun May 24 2020
console.log(date.toTimeString()) // 00:27:20 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()) // Local time 5/24/2020, 12:27:20 AM

console.log(date.getFullYear()) // show year
console.log(date.getMonth()) // show month (start in 0)
console.log(date.getDate()) // show Date
console.log(date.getHours()) // show Hours
console.log(date.getMinutes()) // show minutes
console.log(date.getSeconds()) // show Second