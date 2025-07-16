

/* map, foreach, filter, find, reduce in array */

/// map in arrays is a method that creates a new array by applying a function
//  to each element of the original array.
nums = [3,2,1,5,10];
function fun (x) {
    return 2*x;
}
const ans = nums.map(fun);
console.log(ans);
const ans2 = nums.map(x => x*2); // we can use it more dynamically by using arrow function
console.log(ans2);

/// forEach is an array method that executes a function once for each element.
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));  
// Output: 2, 4, 6  
// Original array unchanged: [1, 2, 3]

///filter creates a new array with elements that pass the condition
players_height = [60, 75, 55, 65, 80, 50];
const ansx = players_height.filter(x => (x>60));
console.log(ansx); // ptinting all players whose height is greater then 60

/// find return the first element that fulfilled the condition if there is no
//  such element its return undefined
console.log(players_height.find(x => (x<10))); 


/// reduce return a single value.
// for example: lets find the total sum of an array
let arr = [2,4,1,7];
const ans3 = arr.reduce((total, current) => (total+current), 0); // here, 0 is the initial value of total
console.log(ans3);


/// callback function: when we pass a function as a parameter in a function is called callback function
function fun4(fun5) {
    fun5();
}
function fun5() {
    console.log("Hello. I am callback function");
}
fun4(fun5);