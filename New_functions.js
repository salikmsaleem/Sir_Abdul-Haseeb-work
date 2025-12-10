a = "5";
// if u want to convert and string into a number just add + before the string ///
typeof(a); // string
typeof(+a); // Number
// if u want to convert a number into a string just add "" before the number ///
typeof(+a + ""); // string
// NaN is not a number, it is a special value in JavaScript but it is of type number ///
typeof(NaN); // number
// ternary operator is a shorthand for if-else if - else statements ///
let b = 10;
let c = 20;
let result = (b > c) ? "b is greater" : (b < c) ? "c is greater" : "both are equal";
console.log(result);
// using ternary operator like arrow function
const check = (num)=>  num<50? (()=> "fail")() :(num>=50)? (()=> "pass")() : (()=> "invalid")();

check(70); // pass  
//// Cryptic style using && and || chaining
const check2 = (num) => (num < 50 && "fail") || (num >= 50 && num <= 100 && "pass") || "invalid";

check2(30); // fail
check2(80); // pass
check2(150); // invalid

// using array indexing
const check3 = (num) => 
  [ "fail", "pass", "invalid" ][
    num < 50 ? 0 : num >= 50 ? 1 : 2
  ];
check3(45); // fail
check3(75); // pass
check3(120); // invalid
