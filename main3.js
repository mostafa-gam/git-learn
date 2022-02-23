/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);



/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed","Sayed","Ali",["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal



/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);


//     \\  Assignment 1\\

let myNumbers4 = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a4, , , , e4] = myNumbers4;
console.log(a4 * e4); // 5


//       \\  Assignment 2\\

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a5, b5, c5, [d5, e5, [f5, g5]]] = mySkills;

console.log(`My Skills: ${a5}, ${b5}, ${c5}, ${d5}, ${e5}, ${f5}, ${g5}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


//       \\  Assignment 3\\

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let allArr = arr1.concat(arr2, arr3);
// console.log(allArr);
let [c6, , , , , , ,a6,b6] = allArr;
console.log(`My Best Friends: ${a6}, ${b6}, ${c6}`);
// My Best Friends: Shady, Mahmoud, Ahmed



/*
  Destructuring
  - Destructuring Object
*/

const user6 = {
  theName6: "Osama",
  theAge6: 39,
  theTitle6: "Developer",
  theCountry6: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName6, theAge6, theCountry6 } = user6;

console.log(theName6);
console.log(theAge6);
console.log(theCountry6);


//       \\  Assignment 4\\

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a7,
  working: w7,
  country:c7,
  hobbies:[h11, , h13]
} = member;

// let {a7 = member.age, w7} = member;    //my answer//
console.log(`My Age Is ${a7} And Iam ${w7 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

// let {c7 = member.country} = member;     //my answer//
console.log(`I Live in ${c7}`);
// I Live in Egypt

// let {hobbies:[h11, , h13] = hobbies.member} = member;    //my answer//
console.log(`My Hobbies: ${h11} And ${h13}`);
// My Hobbies: Reading And Programming



/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user8 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n8,
  theAge: a8,
  theCountry,
  theColor: co = "Red",
  skills: { html: h8, css },
} = user8;

console.log(n8);
console.log(a8);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h8}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user8.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);


//       \\  Assignment 5\\

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
const {title: t9, developer: d9,} = game;
const [o9, a9] = Object.keys(game.releases);
const [[u9, j9], {US: u_price, JAP: j_price}, or] = Object.values(game.releases);

console.log(`My Favourite Games Style Is ${t9} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d9} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o9} It Released in ${u9} & ${j9}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a9}`);
// Although I Love Ark Of Napishtim

console.log(`${a9} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a9} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD



/*
Destructuring
- Destructuring Function Parameters
*/

// const user = {
  //   theName: "Osama",
  //   theAge: 39,
  //   skills: {
    //     html: 70,
    //     css: 80,
    //   },
    // };
    
    // showDetails(user);
    
// function showDetails(obj) {
  //   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }



/*
Destructuring
  - Destructuring Mixed Content
  */

 // const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
  //     egypt: "Cairo",
  //     ksa: "Riyadh",
  //   },
  // };
  
  // const {
    //   theName: n,
    //   theAge: a,
    //   skills: [, , three],
    //   addresses: { egypt: e },
    // } = user;
    
    // console.log(`Your Name Is: ${n}`);
    // console.log(`Your Age Is: ${a}`);
    // console.log(`Your Last Skill Is: ${three}`);
    // console.log(`Your Live In: ${e}`);
    

    //       \\  Assignment 6\\   // and Challenge\\
    
    let chosen = 1;
    
    let myFriends10 = [
      { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
      { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
      { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
    ];
    
    // Write Your Code Here
    if (chosen == 1){
     [{title, age, available, skills:[,a10]}] = myFriends10;
    }else if (chosen == 2){
      [{},{title, age, available, skills:[,a10]}] = myFriends10;
    }else if (chosen == 3){
      [{}, {}, {title, age, available, skills:[,a10]}] = myFriends10;
    }
    let isAvailable = available ? "available" : "not available";
    
    console.log(title);
    console.log(age);
    console.log(isAvailable);
    console.log(a10);
    
    // If chosen === 1
    
    "Osama"
    39
    "Available"
    "CSS"
    
    // If chosen === 2
    
    "Ahmed"
    25
    "Not Available"
    "Django"
    
    // If chosen === 3
    
    "Sayed"
    33
    "Available"
    "Laravel"


/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

//       \\  Assignment 1 \\

let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(2);
console.log(setOfNumbers);
console.log([...setOfNumbers].pop());
console.log(setOfNumbers);

// Needed Output
// Set(3) {10, 20, 2}
// 2


/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

//       \\  Assignment 2 \\

let myFriends11 = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends11));

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
// let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
// console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

//       \\  Assignment 3 \\

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myConv = new Map();
myConv.set("username", "Osama");
myConv.set("role", "Admin");
myConv.set("country", "Egypt");

console.log(myConv);
console.log(myConv.size);
console.log(myConv.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);


/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

// let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

// console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);


/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));


/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray1 = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray1.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray1);


/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let checkk = numss.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(checkk);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(numss, 20));
console.log(checkValues(numss, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = numss.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);


/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let checkkk = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(checkkk);


/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray3 = [1, 2, 3];
let myArray4 = [4, 5, 6];

let allArrays = [...myArray3, ...myArray4];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray3];
console.log(copiedArray);

// Push Inside Array

let allFriendss = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriendss.push(...thisYearFriends);

console.log(allFriendss);

// Use With Math Object

let myNumss = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNumss));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

//       \\  Assignment 4 \\

let theNumber = 100020003000;

//console.log(+[...(theNumber.toString())].sort().join(""));
console.log(+[...new Set(theNumber.toString())].sort().join(""));

// Needed Output
// 123

//       \\  Assignment 5 \\

let theNamee = "Elzero";

console.log(Array.from(theNamee));
console.log([...theNamee]);
console.log(theNamee.split(""));
console.log(Object.assign([] ,theNamee));
console.log([...new Set(theNamee)]);

// Needed Output   5
// ['E', 'l', 'z', 'e', 'r', 'o']

//       \\  Assignment 7 \\

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);
console.log(Array.from([numsOne, numsTwo]).flat());  //
console.log(Array.of(...numsOne, ...numsTwo));       //

// Needed Output
// [1, 2, 3, 4, 5, 6]


