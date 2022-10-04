//Currying In JavaScript

//Question 1 sum(2)(6)(1)

// function first(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// console.log(first(2)(6)(1));

//Question 2 -

//evaluate("sum")(4)(2) => 6
//evaluate("multiply")(4)(2) => 8
//evaluate("divide")(4)(2) => 2
//evaluate("substract")(4)(2) => 2

// function evaluate(cond) {
//   return function (a) {
//     return function (b) {
//       switch (cond) {
//         case "sum":
//           return a + b;
//         case "multiply":
//           return a * b;
//         case "divide":
//           return a / b;

//         case "substract":
//           return a - b;
//         default:
//          return "Unexepected Output";
//       }
//     };
//   };
// }

// const multiply = evaluate("multiply");

// console.log(multiply(2)(3));

// Question 3 - Infinite Currying => sum(1)(2)(3)....(n);

// sum(1)(2); //3
// add((5)(2)(4)(5)());

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }
// console.log(sum(1)(2)(3)());




//Question 4 - Currying vs Partial Application
 
//The number of nested function the currying has depends upon the number of arguments 

//But here it is different or called as Partial Application( transform function into another function with small airity)
 
//function sum(a) {
  //  return function (b,c){
   //     return a + b + c;
   // }
//} 

//console.log(sum(1)(2,3));
   //or
//const x = sum(10);
 //console.log(x(2,3))

//This is currying, above one is partial application
 
// function first(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }




//Question 5 - Manipulating DOM
//(not selecting get element by Id again and again)

// function updateElementText(id) {
//     return function(content){
//          return document.getElementById(id).textContent = content;
//     }
// } 


// const btnClick = updateElementText("heading");

// btnClick("Amlan");
// btnClick("cat");

//Question 6 curry() implementation
//Converts f(a ,b ,c) into f(a)(b)(c)




