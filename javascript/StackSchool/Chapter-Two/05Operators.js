// JavaScript Arithmetic Operators

/*
 * +
 * -
 * *
 * /
 * %
 * ++
 * --
 */
/**
var a = 10
var b = 2

    console.log(' + ' + ( a+b))
    console.log(' - ' + ( a-b))
    console.log(' * ' + ( a*b))
    console.log(' / ' + ( a/b))
    console.log(' % ' + ( a%b))
 */


/*
//incemental
//++ pre incremental - post incremental++

//++ pre incremental
console.log(b);
console.log(++b);

//post incremental
console.log(a++);
console.log(a);

*/


/*****************************/

// JavaScript Assignment Operators
/**
 * =   => a=b
 * +=  =>
 * -=
 * *=
 * /=
 * %=
 * **=
*/

/**
var a = 20;
var b = 10;
console.log(a + b)

// +=
a += b; //=> a=a+b
console.log(a)

//-=
a -= b;;
console.log(a);

//-=
a *= b;;
console.log(a);

// /=
a /= b;
console.log(a);


// %=
a %= b;
console.log(a);


// **=

var x = 2;
var y = 5;

x **= y;
console.log(x);
 */



// JavaScript Comparison Operators
/**
 * ==  
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 * ?
 * NOTE : its return boolen value (true/ false)
*/

var a = 10;
var b = 20;
console.log(a == b); //false => == equal
console.log(a != b); //true => != not equal

console.log(a < b); //true => < less Then => a=10 < b=20 -> true
console.log(a > b); //False => > Gratter Then =>  a=10 > b=20 => false

a = 20; //change var
console.log(a <= b); //true => < less Then or equal
console.log(a >= b); //true => > Gratter Then or equal

var x = '50'
var y = 50

console.log(x === y); // false => check equal and datatype
console.log(x !== y); // True => check not equal and not same datatype