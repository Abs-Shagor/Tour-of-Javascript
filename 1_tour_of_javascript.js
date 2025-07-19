
JavaScript is a JIT(Just-In-Time) compiled / proto-typed based / interprated Programming Language.


Reminder: Javascript and C++ has lot of similarities
C-style syntax:
Both code structures are almost the same for writing conditional(if, else), loop(for, while, do-while), closing with ;  etc.
Constants and Variables:
C++: const, int, double, etc.
JS: const, let, var.
Operators:
Arithmetic operators: +,-,*,/,==,!=,++,--
Bitwise or Logical operators: &,|,^,~,<<,>>
Ternary Operator:
Both use condition ? true : false.
Boolean Logic:
Both treat values like 0, null/nullptr,true,false
Comments:
Same syntax: // (single line), /* ... */ (multi-line).
Standard Input/Output (with differences):
C++: cin, cout
JS: prompt, console.log() [for browser]; readline, process.stdout [For Node.js]


SOME DIFFERENCE’s & EXTRA STUFF

Variable

We know that js supports the variable var, let, const.
Here, var is function-scoped and let, const are blocked-scoped.

Function-scoped means the variable can be accessible everywhere inside that function, regardless of blocks (if, for, etc.).
function fun() {
    if(1===1) {
        var x = 20;
    }
    console.log(x);
}
fun() // output: 20

Block-scoped means the variable is only accessible within the block {  }  where it is declared.
function fun() {
    if(1===1) {
        let x = 20;
    }
    console.log(x);
}
fun()  // output: x is not defined
Operator

In js == just compare the value it doesn't care about the type of the variable. For example:
if(12=='12') {
    console.log('Hello');
}
else {
    console.log('Hi');
}
Output: Hello

But, === check both value and type. For example:
if(12==='12') {
    console.log('Hello');
}
else {
    console.log('Hi');
}
Output: Hi

So, to compare something genuinely we always used ===

Array

const nums1 = [3, 1, 70,2];
const nums2 = [2.1, 0.5, 21.2];
const str = ['sagor',  'joy' ] ;
const mixed = [5, 'sagor', 0.5] ;


console. log(nums1.length);   // output: 4
console.log(nums2[0]);   // output: 2.1

Js array support: push, pop,  shift, unshift
for insert and delete elements from back: push(x) , pop() 
from beginning: unshift(x),   shift()

Also we can use destructure to access array value
let nums = [3,2,5];
const [a, b, c] = nums;
console.log(b); // output: 2


String

In js string is immutable. That means we cannot change the character of the original string.

let str = "hello";
str[0] = "H";
console.log(str); // "hello" — not changed

// Template Literal ` `
const a = 2, b = 3;
const result = 'The sum of '+a+' and '+b+' is '+(a+b); // Normal way
const result1 = `The sum of ${a} and ${b} is ${a+b}`; //  dynamic way by using backtick(``);
const result3 = `
    Hello! Shagor.
    Whats up?
`
console.log(result3);


Object

In JavaScript, an object is a collection of key-value pairs used to store related data and functionality. It is defined by {key1:value1,  key2:value2,....... }

/// simple object
const person = {
    Name: 'Abs shagor',
    Id: 211056,
    Height: 5.6,
    Parents: ['Alam', 'Ruma'],
    Parents_Age: [50, 45],
    School: 'MHS',
    CollegeName: 'HGC',
    'University Name' : 'IIUC' // used '' to declare a key name with white space
}
console.log(person); // output: whole object
console.log(person.Name); // output: Abs Shagor
console.log(person['Name']); // output: Abs Shagor
const x = 'Name' ;
console.log(person[x]); // output: Abs Shagor

// using Destructore we can use the object key as a variable directly
const {Name,Id, Height, Parents, Parents_Age, School, CollegeName} = person;
console.log(Id); // 211056



const arr1 = Object.values(person); // this will store all the values of person object in arr1
const arr2 = Object.keys(person); // all keys in arr2
console.log(arr1); // output: all the values of person
console.log(arr2); // output: all the keys of person


/// Nested object
const person2 = {
Name: 'Abs shagor',
Id: 211056,
Height: 5.6,
Parents: ['Alam', 'Ruma'],
ParentsAge: [50, 45],
Education: {
    School: 'MHS',
    CollegeName: 'HGC',
    'University Name': 'IIUC',
}
}
console.log(person2.Education.School) // output: MHS
console.log(person2.Education['School']) // output: MHS


/// Loop through object
for(const x in person) {
console.log(x) ;  /// output all keys
console.log(person[x] ) ;  /// output all values
}
/// another way to access keys and values
const keys = Object.keys(person2);
const values = Object.values(person2);
console.log(keys);
console.log(values);



/// To create object we can also use
const person3 = Object.create({Name:'shagor', age:26})
console.log(person3); // output: {} bcz Name & age are on the prototype, not as direct properties.
console.log(person3.Name); // output: shagor



Loop

const nums = [3, 2, 1, 21, 7];


for(const x of nums) {
 console. log (x) ;
}


for(let i=0; i<20 ; i++) {
console.log (i) ;
}


let i=0;
while(i<10) {
    console.log(i) ;
    i++;
}


const j=0;
do {
    console.log(i) ;
    j++;
}
while(j<20)

Note: [of for loop] use for array iteration and [in for loop] use for object iteration.




Sorting

const str =['joy', 'shagor', 'Alam', 'ruma', 'sami', 'alam' ] ;
str.sort();
console.log(str); // Output: Alam, alam, joy, ruma, sami, shagor


const nums =[4, 22,45,1,3,2]
nums.sort();
console.log(nums); // Output: 1,2,22,3,4,45
// but this will not sort the array properly bcz sort function
// take the array elements as string.
// To sort the integer array properly we have to do the following things :
// For Ascending order=>
nums.sort(function(a,b){return a-b}) ; // For descending just return b-a
console.log(nums); // 1 2 3 4 22 45




const nums2 = [3, 2, 1, 2];
const nums3 = nums2.sort(function(a,b){return a-b}) ;
const nums4 = nums2.sort(function(a,b){return b-a}) ;
console.log(nums3); // output: 3 2 2 1
console.log(nums4); // output: 3 2 2 1
// Reason of same output: num2,nums3 modify nums2 in-place because .sort() mutates the original array.
// Clone before sorting to avoid mutation
const nums5 =[... nums2] .sort(function(a,b){return a-b}) ;
const nums6 =[... nums2] .sort(function(a,b){return b-a}) ;
console.log(nums5); // output: 1 2 2 3
console.log(nums6); // output: 3 2 2 1


Function

/// without parameter
function fun() {
  console.log("Hello world!");
}
fun(); // output: "Hello world!"




/// with parameters
function fun(a, b) { 
  return a + b;
}
console.log(fun(2, 3)); // output: 5




///with default parameters
function fun(name = "shagor") {
  name = "Abs "+name;
  console.log(name);
}
fun(); // output: Abs shagor

function fun(a, b, c=0) {
    return a+b+c;
}
console.log(fun(2,3)); // output: 5
console.log(fun(2,3,4)); // output: 9




/// creating a anonymous function (no name) and assigning it to a constant named fun
const fun = function (a, b) {
  return a - b;
};
console.log(fun(10, 3)); // output: 7




/// Arrow function
const fun = () => console.log('Hello world!');
fun();

const fun1 = (a, b)=> a+b;
console.log(fun1(2,3));

const fun2 = (a, b) => {
    const x = a-b;
    return x;
}
console.log(fun2(7,3)); 


/// In this function we can pass any number of argument
function fun(...x) { // it's gives an array of parameter
    return x[0]+x[2]; // return the sum of first and 3rd element
}
console.log(fun(2,1,3,1,11)); // passing arbitory number of argument


/// map in arrays is a method that creates a new array by applying a function to each element of the original array.
nums = [3,2,1,5,10];
function fun (x) {
    return 2*x;
}
const ans = nums.map(fun);
console.log(ans);
// we can use it more dynamically by using arrow function
const ans2 = nums.map(x => x*2);
console.log(ans2);


/// Note one more thing
function fun(a, b) { // here, a and b are parameter
  return a - b;
};
console.log(fun(10, 3)); // but here, 2 and 3 are argument




/// let’s pass different type of parameters
function fun(num, nums, char, str, objct, bool) {
    if(bool==true) {
        console.log(num);


        const sz = nums.length;
        for(let i=0 ; i<sz ; i++) {
            console.log(nums[i]);
        }


        console.log(char);
        console.log(str);


        console.log(objct);
    }
}
fun(7, [3,1,2], 'a', 'shagor', {name:'shagor', age:26}, true); // output: 7 3 1 2 a shagor name:shagor age:26




Pass-by-Value and Pass-by-Reference

pass by value mean: just pass the value in the function this will not change the original variable value.
pass by reference mean: it will change the value of the original variable in C++ we use & to pass the value as reference[it's support:int,string,char,vector,array etc]. like this  void fun(int &a, int &b) { } 
But in javascript we can pass: 
primitive type(ex. number, string, boolean) → passed by value 
Non-primitive type(ex. Objects & arrays) → passed by reference



//In this code a and b are not swapped bcz js passes value in function(like c++) which we say pass by value.
function fun(a,b) {
    let c = b;
    a = b;
    b = c;
}
let a=2, b=3;
fun(a,b);
console.log(a); // output: 2


Necessary in-build function

typeof x → To see the type of x variable
toFixed() →  To set decimal after dot in Float number
parseInt(), parseFloat()  →  To convert string integer/float to number  integer/float
toUpperCase(), toLowerCase()  → makes all letters uppercase 
trim(), trimStart(), trimEnd() → removes whitespace from both ends, from start, from end.
slice(start, end) → extracts part of a string/array 
split(separator) → splits or separate string by something (e.x. ‘’ or ‘ ‘ or ‘xyz’)  and convert it to array 
join(separator) → join array elements by something (e.x. ‘’ or ‘ ‘ or ‘xyz’)  and convert it to string
concat() → joins strings or arrays 
includes(value) → checks if string/array contains value

Necessary function of Math object

console.log(Math.min(3,2,45,0,902,1));
console.log(Math.max(3,2,45,0,902,1));


const arr1 = [3,2,44,101,5,3,101,22,8,2];
console.log(Math.min(...arr1)) // we cannot directly pass the arr1. we have to use spread operator ... to pass array elements
console.log(Math.max(...arr1))


console.log(Math.PI);
console.log(Math.abs(-22));
console.log(Math.round(7.4016));
console.log(Math.ceil(3.1426));
console.log(Math.floor(3.1416));
console.log(Math.random()); // return a random fraction number between 0 and 1




Necessary function of Date object

let time = new Date(); // Current date & time
let time1 = new Date("1999-08-20"); // set Specific date
let time2 = new Date(1999, 7, 20); // (year, monthIndex, day) → month is 0-based


console.log(time); // output: 2025-06-28T16:56:33.604Z
console.log(time2); // output: 1999-08-20
console.log(time2); // output: 1999-08-20 // day can show 19 bcz of time zone(UTC)


// Get Date Parts
console.log(time.getFullYear()); // output: 2025
console.log(time.getMonth());    // output: 5  [0-index (0 = Jan)]
console.log(time.getDate());     // output: 28
console.log(time.getDay());      // output: 6  [0-index (0 = Sunday)]
console.log(time.getHours());    // output: 23 [0-index]
console.log(time.getMinutes());  // output: 51 [0-index]
console.log(time.getSeconds());  // output: 18


// set Date parts
time.setFullYear(2030);
time.setMonth(11);
time.setDate(25);


console.log(time); // output: 2030-12-25 // day can show 24 bcz of time zone(UTC)


// Format of Date or time
time.toDateString();     // "Sat Jun 28 2025"
time.toTimeString();     // "17:45:12 GMT+0600 ..."
time.toISOString();      // "2025-06-28T11:45:12.345Z"
time.toLocaleString();   // Local format (e.g., "6/28/2025, 5:45:12 PM")





Practicing Some common problem



/* Check if the year is a Leap year or not */
function fun1(x) {
    if(x%4==0 && x%100!=0) {
        return true;
    }
    else if(x%400==0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(fun1(2023));
console.log(fun1(2024));




/* find all the unique element of an array */
function fun2(arr) {
    const sz = arr.length;
    const unq = [];
    for(let i=0 ; i<sz ; i++) {
        if(!unq.includes(arr[i])) {
            unq.push(arr[i]);
        }
    }
    return unq;
}
const arr = [3,2,1,1,5,1,2,8,2];
console.log(fun2(arr));
/* Swap: Normal way */
let a=2, b=3;
let c=a;
a=b;
b=c;
console.log(a,b); // 3 2


/* Swap: shortcut */
let x=2, y=3;
[x,y] = [y,x];
console.log(x,y); // 3 2






/*
Let, we have a array of object.
1/ find the chepest phone
2/ find those phone which color is black
*/
function cheapMobileName(mobiles) {
    let ans, mn = 999999999;
    const sz = mobiles.length;
    for(let i=0 ; i<sz ; i++) {
        if(mobiles[i].price<mn) {
            mn = mobiles[i].price;
            ans = mobiles[i].name;
        }
    }
    return ans;
}
function BlackColorMobileName(mobiles) {
    let ans = [];
    const sz = mobiles.length;
    for(let i=0 ; i<sz ; i++) {
        if(mobiles[i].color==='black') {
            ans.push(mobiles[i].name);
        }
    }
    return ans;
}
const mobiles = [
    {name:'samsung', price:45000, color:'black'},
    {name:'Iphone', price:150000, color:'white'},
    {name:'Huewei', price:33000, color:'black'},
    {name:'walton', price:150000, color:'red'},
]
console.log(cheapMobileName(mobiles)); // output: Huewei
console.log(BlackColorMobileName(mobiles));






