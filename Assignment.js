//  function removeVowels(inputString) {
//      return inputString.replace(/[aeiouAEIOU]/g, '');
// } const result = removeVowels("Hello, World!");
// console.log(result); 

//Question no. 2 Palindrome number
// function isPalindrome(str) {

//   str = str.replace(/[\W_]/g, '').toLowerCase();

//   let left = 0;

//   let right = str.length - 1;

//   while (left < right) {

//     if (str[left] !== str[right]) {

//       return false;

//     }

//     left++;

//     right--;
//   }

//   return true;
// }
// const userInput = prompt("Enter a string or number:");

// alert(isPalindrome(userInput) ? "It's a palindrome!" : "Not a palindrome.");
  

// Question 3 Chracter count

// let str = "Sumit";
// let result = {};

// // Iterate over each character of the string using for...of loop
// for (let char of str) {
//     // Increment the count of the character in the object
//     result[char] = (result[char] || 0) + 1;
// }

// console.log("The occurrence of each letter in the given string is:", result);


// Question 4  Substring find

// let str = "Hello there! Welcome to sumit world";
// let flag = str.includes("sumit");
// console.log(flag);

// Question 5 Array Deduplication

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  
// console.log(removeDuplicates(['a', 'b', 'a', 'c']));  

// Questiob 6 Find maximum element in  array
// function findMax(arr) {
//     let max = arr[0];   
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];  
//       }
//     }
    
//     return max;
//   }
//   const numbers = [3, 5, 7, 2, 8, -1, 4];
//   const maxNumber = findMax(numbers);
//   console.log(maxNumber);  

 //Question 7Common element in array
//  let array1 = [1, 2, 3, 4, 5];
//  let array2 = [4, 5, 6, 7, 8];
 
//  let set1 = new Set(array1);
//  let set2 = new Set(array2);
 
//  let commonElements = [...set1].filter(item => set2.has(item));
 
//  console.log(commonElements);  //

// Question8 Deep clone
// let student1 = {
//     name: "Manish",
//     company: "Gfg"

// }
// let student2 = student1;

// student1.name = "Rakesh"

// console.log("student 1 name is", student1.name)
// console.log("student 2 name is ", student2.name);

 //Question 9 Merging two object
// const person = {
//     name: 'Jack',
//     age:26
// }
// const student = {
//     gender: 'male'
// }
// const newObj = Object.assign(person, student);

// console.log(newObj);
  
//Fibonacci series

// function fibonacciForLoop(n) {
//     let fib = [0, 1]; 
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib.slice(0, n); 
//   }
  
//   console.log(fibonacciForLoop(10));
  
//Memoization
  
// const father = {
//     name: "Amit",
//     age: 23,
//     occupation: "Doctor",
//     son: {
//         name: "anshul",
//         age: 20,
//         hobby: "cricket"
//     }
// };

//  function flattenDetails(obj) {
//     const detailsArray = [];
    
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//              detailsArray.push(`${key}: ${obj[key]}`);
            
//              if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 const nestedDetails = flattenDetails(obj[key]);
//                 detailsArray.push(...nestedDetails);  
//             }
//         }
//     }
    
//     return detailsArray;
// }

//  const flattenedDetails = flattenDetails(father);

//  console.log(flattenedDetails);

 // Key Key value print
 
//  let familyData = [];
// const familyTree = [
//     {
//       name: "Shiv",
//       age: 50,
//       children: [
//         {
//           name: "razz",
//           age: 30,
//           children: [
//             {
//               name: "Sara",
//               age: 10,
//               children: [
//                 {
//                   name: "Lucky",
//                   age: 5,
//                   children: [] 
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "ravan",
//           age: 28,
//           children: [
//             {
//               name: "Emily",
//               age: 6,
//               children: [
//                 {
//                   name: "Tommy",
//                   age: 1,
//                   children: [] 
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "Sandeep",
//       age: 48,
//       children: [
//         {
//           name: "Sumit",
//           age: 25,
//           children: [
//             {
//               name: "abhishek",
//               age: 3,
//               children: [] 
//             }
//           ]
//         }
//       ]
//     }
//   ];
  
//   function getAllNames(family) {
//     let names = [];
  
//     family.forEach(member => {
//       names.push(member.name); 
//       if (member.children && member.children.length > 0) {
//         names = names.concat(getAllNames(member.children)); 
//       }
//     });
  
//     return names;
//   }
  
//   const allNames = getAllNames(familyTree);
//   console.log(allNames);


  // Prime no.
//   function isPrime(n) {
    
//     if (n <= 1)
//       return false;
//     for (let i = 2; i < n; i++)
//       if (n % i == 0)
//         return false;
  
//     return true;
//   }
//   isPrime(10)
//     ? console.log("true")
//     : console.log("false");

 // Reverse array
//  let numbers_array = [1, 2, 3, 4, 5];

//  console.log("Original Array: ");
//  console.log(numbers_array);

//  for (let i = 0; i < Math.floor(numbers_array.length / 2); i++) {
//      let temp = numbers_array[i];
//      numbers_array[i] = numbers_array[numbers_array.length - 1 - i];
//      numbers_array[numbers_array.length - 1 - i] = temp;
//  }
 
//  console.log("Reversed Array: ");
//  console.log(numbers_array);
 

// Function composition
// const add5 = (x) => x + 5;
// const multiplyBy3 = (x) => x * 3;
// const subtract10 = (x) => x - 10;

// const composedFunction = compose(subtract10, multiplyBy3, add5);
// const result = composedFunction(7);

// console.log(result);

// Throttle program
// let apiCalled;
// const throttle = (fn, time) =>{
//     if (apiCalled) return;
//     apiCalled = true;
//    setTimeout(() =>{
//       fn();
//       apiCalled = false;
//    }, time);
// };

// const sendEmail = ()=>{
//     throttle(()=>{
//     console.log('sending email')
// },500)
// }

// document.getElementById("s").addEventListener("input",function(e){
//     sendEmail();
// })
