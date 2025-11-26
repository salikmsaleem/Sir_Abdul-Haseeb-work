
// Quick examples of common JavaScript operators.
// Run with: node salik.js

// Arithmetic
let a = 10;
let b = 3;
console.log('a + b =', a + b);     // 13
console.log('a - b =', a - b);     // 7
console.log('a * b =', a * b);     // 30
console.log('a / b =', a / b);     // 3.333...
console.log('a % b =', a % b);     // 1
console.log('a ** b =', a ** b);   // 1000
a++; // post increment
++b; // pre increment
console.log('a (after a++) =', a, 'b (after ++b) =', b);

// Assignment 
let x = 5;
x += 3; // x = x + 3
x *= 2; // x = x * 2
console.log('x after += and *= :', x);

// Comparison
console.log('5 == 5', 5 == '5');   // true 
console.log('5 === 5', 5 === '5'); // false 
console.log('3 > 2?', 3 > 2);
console.log('3 <= 3?', 3 <= 3);

// Logical
const t = true, f = false;
console.log('t && f =', t && f); // false
console.log('t || f =', t || f); // true
console.log('!t =', !t);      // false
console.log('!f =', !f);      // true

// Nullish coalescing and optional chaining
const obj = { nested: { value: 42 } };
console.log('optional chaining:', obj.nested.value); // 42
console.log('nullish coalescing:', null ?? 'fallback'); // 'fallback'

// Ternary operator
const age = 20;
console.log('isAdult:', age >= 18 ? 'yes' : 'no');

// Bitwise (operate on 32-bit integers)
console.log('5 & 3 =', 5 & 3); // 1 
console.log('5 | 2 =', 5 | 2); // 7 
console.log('~1 =', ~1);       // bitwise NOT

// Shift operators
console.log('1 << 2 =', 1 << 2); // 4
console.log('-1 >>> 1 =', -1 >>> 1); // zero-fill right shift

// typeof and instanceof
console.log('typeof [] =', typeof []); // 'object'
console.log('[] instanceof Array =', [] instanceof Array); // true

// in operator (property presence)
console.log("'length' in [] =", 'length' in []);

// delete operator (remove property)
const person = { name: 'Sam', age: 30 };
delete person.age;
console.log('person after delete:', person);

// Spread operator (also rest)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log('spread array:', arr2);

// Comma operator (evaluates left to right, returns last)
let commaResult = ( (1 + 2), (3 + 4) );
console.log('comma operator result =', commaResult); // 7

// new operator (construct)
function Point(x, y) { this.x = x; this.y = y; }
const p = new Point(2, 3);
console.log('Point constructed:', p);

// Examples of logical assignment operators (ES2021)
let m = null;
let n = 0;
m ??= 'default'; // nullish assignment
n ||= 5;         // logical OR assignment (0 is falsy so becomes 5)
console.log('m, n after logical assignments:', m, n);

// Avoid confusing equality: prefer === and !== for comparisons.