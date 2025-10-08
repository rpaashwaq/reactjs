```javascript
Questpond ReactJs
--Lab requirement--
--Node Js
--VSCode
--Visual Sudio Community Edition 2022
```
```javascript
Day1

Javascript is a dynamic scripting language
Interpreted at client side by V8 engine

JS - ES - Ecmascript  - Standard for scripting langauge
HTML - W3C
```
```javascript
var i = 10;
i = 'pradeep';
i = true;
let i =1;
```
```javascript
NodeJs
- Javascript runtime environment 
- Cross platform
- Open source
```
```javascript
var- global /function scope
let - blocked scope

Hoisting
Scan the code & move the declaration on the top
```
```javascript
ReactJs
- Library used for developing reusable UI component
- Known for speed, scalability, simplicity
```
```javascript
map() - Transforming each item in the array,  Can be used for modifying objects
spread operator - expanding an array
rest operator - collect in to a array
```
```javascript
first.js
--------
var a = 100;
let b = 200;
if (true) {
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);



for(let i1=0;i1<3;i1++){
    console.log(i1);
}
console.log(i1);
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="first.js"></script>
</head>
<body>
    <h4>This is my first app</h4>
</body>
</html>
```
```javascript
array.js
--------
let arr = [1, 23, 4, 5];


//for of  --- foreach
for (let num of arr) {
    console.log('Item=' + num);
}

//for in
for (let indx in arr) {
    console.log('Item=' + arr[indx]);
}

let newarr = arr.map((val, indx) => {
    return val * 2;
})
console.log('---------------');
console.log(newarr);

let students = [{ name: 'pradeep', marks: '37' }, { name: 'rajesh', marks: '35' }];

let filteredStudents = students.map((student, indx) => (
    {
        ...student, remark: 'pass'
    }
));

console.log(filteredStudents);


//spread operator - expanding an array
//rest operator - collect in to a array
let nums1 = [1, 2, 3, 6, 7];
let nums2 = [4, 5, 6];
let nums3 = [...nums1, ...nums2];  //1,2,3,6,7,4,5,6
for (let obj of nums3) {
    console.log('Num:' + obj);
}

//Destructuring
let [a, b, c, ...rest] = nums3;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

function add(x, y, ...remainingNos) {
    let result = x + y;
    for (let n of remainingNos) {
        result = result + n;
    }
    return result;
}

console.log(`Result = ${add(1, 2, 3, 4, 5, 6, 7, 8)} `);
```
