let a = "mosta";
let b = "gaml";
let c = "love";
let d = "java script";
document.write(a + " " + b);

console.log(a, b);

console.log(`${a} ${b} ${c} ${d}`);

let title = "elzero";
let desc = "elzero web scchoool";
let markup = `
<div class="card">
<div class="child">
  <h2>${title}</h2>
  <p>${desc}</p>
</div>
</div>
`;
document.write(markup);

document.write("<h1>Hello <span>Page</span></h1>");

document.write(["Osama", "Ahmed", "Sayed"]);

console.log( { name: "Osama", age: 17, country: "Eg" });

// challenge
let pageTitle = "elzero",
    pageDes = "elzero web scchoool",
    pageTime = "25/10";

let thePage = `<div>
<h1>"hello"${pageTitle}</h1>
<p>"${pageDes}"</p>
<span>"${pageTime}"</span>
</div>`;
document.write(thePage.repeat(3));

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1;

num = 1;
++num
document.write(num);

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
let e = "100";
let f = 20;
let g = true;

console.log(+e + f + g);

/*
  Assignment Operators
*/

let h = 10;

h = h + 20;

h = h + 70;

h += 100; // a = a + 100

h -= 50; // a = a - 50

h /= 50; // a = a / 50
console.log(h);

/*
  Challenge 1
*/
let i = 10;
let j = "20";
let k = 80;
        // 11 +   20   +  80  -  11   = 100
console.log(++i + +j++ + +k++ - +i++);
        //  13  -21  +  81  + 13  + 14  = 100
console.log(++i + -j + +k++ - -i++ + +i);
        //  81  + 21 +  13 *  20  - 21 * 13+ 12 - 1  = 100
console.log(--k + +j + --i * +j++ - +j * i + --i - +true);

let L = "-100";
let M = "20";
let N = 30;
let O = true;

          //100*20
console.log(-L * +M); // = 2000

          //21  + 31  + 100 +21 
console.log(++M + ++N + -L + +M); // = 173

/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

// Numbe method
console.log((100).toString());
console.log(100.10.toString());

console.log(100.554555.toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

/*
  Number Challenge
*/

let p = 100;
let q = 2_00.5;
let r = 1e2;
let s = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(p, q, r, s)));

// Use Variables a + d One Time To Get The Needed Output
console.log(p** Math.trunc(s)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(s));
console.log(Math.floor(s));
console.log(parseInt(s));
console.log(Math.trunc(s));

// Use Variables b + d To Get This Valus
console.log((parseInt(q) / Math.ceil(s)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(q) / Math.ceil(s)); // 67 => Number

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let Name = "  Ahmed  ";

console.log(Name);
console.log(Name[1]);
console.log(Name[5]);

console.log(Name.charAt(1));
console.log(Name.charAt(5));

console.log(Name.length);
console.log(Name.trim());

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

console.log(Name.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let t = "Elzero Web School";

console.log(t.indexOf("Web"));
console.log(t.indexOf("Web", 8));
console.log(t.indexOf("o")); // 5
console.log(t.lastIndexOf("o")); // 15

console.log(t.slice(2, 6));
console.log(t.slice(-5, -3));

console.log(t.repeat(5));

console.log(t.split("", 6));

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let u = "Elzero Web School";

console.log(u.length);

console.log(u.substring(2, 6));
console.log(u.substring(6, 2));
console.log(u.substring(-10, 6)); // 0 - 6
console.log(u.substring(u.length - 5, u.length - 3));

console.log(u.substr(0, 6));
console.log(u.substr(17));
console.log(u.substr(-3));
console.log(u.substr(-5, 2));

console.log(u.includes("Web"));
console.log(u.includes("Web", 8));

console.log(u.startsWith("E"));
console.log(u.startsWith("E", 2));
console.log(u.startsWith("zero", 2));

console.log(u.endsWith("l"));

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let v = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(v.charAt(2).toUpperCase() + v.slice(3, 6)); // Zero

// 8 H
console.log(v.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(v.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(v.substr(0, 6) , v.substr(11, 17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(v.charAt(0).toLowerCase()+v.slice(1,v.length -1).toUpperCase()+v.charAt(v.length -1).toLowerCase()); // eLZERO WEB SCHOOl

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

console.log("mosta");

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" != 10 ); // true
console.log(! 20 == false); // true

console.log("mosta");

let num1 = 10;
let num2 = 20;

console.log(num2 >= num1); // true
console.log(num1 <= num2); // true
console.log(num1 !== num2); // true
console.log(num1 != num2); // true
console.log(num2 > num1); // true
console.log(num1 < num2); // true
console.log(typeof num1 === typeof num2 ); // true
console.log(!(num1 == num2) ); // true

console.log("mosta");

let w = 20;
let x = 30;
let y = 10;

console.log(w != x && w == y || w < x); // true
console.log(w < x && w > y); // true
console.log(!(w == x) && !(w > x) && !(w <= y) && !(w < y)); // true


/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
  Nested If
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {

//   price -= discountAmount;

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;

//   } else {

//     price -= discountAmount + 10;

//   }

// } else {

//   price -= 10;

// }

// console.log(price);


/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let bprice = 0;

console.log(`The Price Is ${bprice || 200}`);
console.log(`The Price Is ${bprice ?? 200}`);

/*
  If Condition Challenge
*/

let mo = 10;

mo < 10 
? console.log(10)
: mo >= 10 && mo <= 40
? console.log("10 To 40")
: mo > 40
? console.log("> 40")
: console.log("Unknown");


// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(st.search("W")) === "W") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st === typeof "number") {
  console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// answer challenge

switch (job) {
case "Manager":
salary = 8000;
  console.log(salary);
break;
case "IT":
case "Support":
salary = 6000;
  console.log(salary);
break;
case "Developer":
case "Designer":
salary = 7000;
  console.log(salary);
break;
default:
salary = 4000;
  console.log(salary);        
}

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

//answer challenge

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
    console.log(`My Money is ${money}`);
} else {
  money = 1000;
  console.log(`My Money is ${money}`);
}

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);

myFriends[1] = "Gamal";
console.log(myFriends);

myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

/*
  Array Methods
  - Length
*/

//Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriendse = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriendse.length = 2;

console.log(myFriendse);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriend);

myFriend.unshift("Osama", "Nabil");

console.log(myFriend);

myFriend.push("Samah", "Eman");

console.log(myFriend);

let first = myFriend.shift();

console.log(myFriend);

console.log(`First Name Is ${first}`);

let last = myFriend.pop();

console.log(myFriend);

console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFrien = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFrien);

console.log(myFrien.indexOf("Ahmed"));
console.log(myFrien.indexOf("Ahmed", 2));

console.log(myFrien.lastIndexOf("Ahmed"));
console.log(myFrien.lastIndexOf("Ahmed", -2));

console.log(myFrien.includes("Ahmed"));
console.log(myFrien.includes("Ahmed", 2));

if (myFrien.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFrien.indexOf("Osama"));
console.log(myFrien.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFrie = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFrie);
console.log(myFrie.sort());
console.log(myFrie.reverse());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFri = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFri);
console.log(myFri.slice());
console.log(myFri.slice(1));
console.log(myFri.slice(1, 3));
console.log(myFri.slice(-3));
console.log(myFri.slice(1, -2));
console.log(myFri.slice(-4, -2));
console.log(myFri);

myFri.splice(1, 2, "Sameer", "Samara");

console.log(myFri);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriendss = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriendss.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
console.log(my.slice(zero, my.indexOf("Gamal")).reverse());
my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]
my = "Elzero";
console.log(my); // "Elzero"

console.log(my.slice(++counter).toUpperCase()); // "rO"

