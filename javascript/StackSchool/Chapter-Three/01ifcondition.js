// 022. What is If Conditions in Javascript

/**
 * if(condition){ }
 * Bollen value retuen kore amn oparetor add korte hobe
 */

/* 
    var a = 10
    var b = 20

    if (a <= b) {
        console.log(a + " a is Gratter Then " + b);
    } else {
        console.log(b + " a is Gratter Then " + a);
    }
*/

/*
var a = -1

if (a % 2 == 0) {
    console.log(a + " is Even")
} else if (a % 2 == 1) {
    console.log(a + " is ODD")
} else {
    console.log("Not Valuad number")
}
*/

var hour = new Date().getHours();
console.log(hour)
if (hour < 24) {
    console.log("Good Moring");
} else {
    console.log("Good Evening");
}