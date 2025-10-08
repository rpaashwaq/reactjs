```Day2```
```javascript
//arguments - inbuild object that contains array of args passed
function callFn(){
    console.log(arguments[0]);
}

//reduce - iterates through the array and return single value
let numbers = [2,4,5,6,7,7];
const sum = numbers.reduce((result, current) => {
    return result + current;
});
```
```javascript
Modules allow you to break up your code into separate files

	import {Person, add} from "./person.js";
	class Employee
	{
		constructor(eid){
			this.EmployeeId = eid;
		}

		showEmployeeInfo(){
			let person = new Person(101,'test person');
			person.personId = 102;
			person.showInfo();

			alert('Hello');
			add(1,2);
		}
	}
	export default Employee;
```
```javascript
Evolution of ReactJs
0.3.0-0.8.0 - 2013
v15 - 2016
v16- 2017
v17- 2020
v18- 2022
v19 - 5Dec2024
```
```javascript
vite
- A build tool for faster development
-Create a scaffolded project
-Spin up dev server faster, HMR (Hot module replacement)
-bundles the code in to es standard

>npm create vite@latest  myapp -- --template react
>cd myapp
>npm install
>npm run dev

NPM (Node Package Manager)
- Used for downloading or sharing the js/css package from public respository
- It resolves inter dependencies 
- It can read package.json
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
    <script type="module">
        import Employee from './employee.js';
        let obj = new Employee(1001);
        obj.showEmployeeInfo();

        document.getElementById('btn').addEventListener('click',(event) => {
            event.target.value= "Clicked Me";
            event.target.style.backgroundColor ='yellow'; 
        });
    </script>
    <h4>This is my first app</h4>
    <input type="button" value="Click Me" id="btn" />
</body>

</html>
```
```javascript
import {Person, add} from "./person.js";

class Employee
{
    constructor(eid){
        this.EmployeeId = eid;
    }

    showEmployeeInfo(){
        let person = new Person(101,'test person');
        person.personId = 102;
        person.showInfo();

        alert('Hello');
        add(1,2);
    }
}

export default Employee;

```
```javascript
export class Person
{
    constructor(pid, pname)
    {
        this.personId = pid;
        this.personName = pname;
    }

    showInfo(){
        console.log(`Id = ${this.personId}`)
        console.log(`Name = ${this.personName}`)
    }

    callme(){
        
    }

}

export function add(x,y)
{
    return x+y;
}

const PI = 3.14;


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

//Named function
function add(a,b){
    return a+b;
}

//anonymous function 
let add1 = function(a,b) {
    return a+b;
}

//arrow function 
let add2 = (a,b) => a+b;

//arguments - inbuild object that contains array of args passed
function callFn(){
    console.log(arguments[0]);
}

let callFn1 = (...arr) => {
    console.log(arr[0]);
}

callFn('abc','def');
callFn1('abc','def','efg');
```

```javascript
Static
------
class Fruit
{
    static generate(){
        console.log('Generate Fruit');
    }
}

//static methods
Fruit.generate();

//----------------------------
//reduce - iterates through the array and return single value

let numbers = [2,4,5,6,7,7];

const sum = numbers.reduce((result, current) => {
    return result + current;
});
console.log(`Total= ${sum}`);//interpolation

```
```javascript

Arrays
------
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

let students = [{ name: 'pradeep', marks: '37' },
                { name: 'rajesh', marks: '35' },
                { name: 'jey', marks: '50' }];

let filteredStudents = students
                        .filter(d=>d.marks > 35)
                        .map((student, indx) => (
                            {
                                ...student, remark: 'pass'
                            }
                        ));

console.log(filteredStudents);


//spread operator - expanding an array
//rest operator - collect in to a array
let nums1 = [1, 2, 3, 6, 7];
let nums2 = [4, 5, 6];
let nums3 = [...nums1, ...nums2];  //1,2,3,6,7,4,5,6  //spread
for (let obj of nums3) {
    console.log('Num:' + obj);
}

//Destructuring
let [a, b, c, ...rest] = nums3;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

function add(x, y, ...remainingNos) { //rest
    let result = x + y;
    for (let n of remainingNos) {
        result = result + n;
    }
    return result;
}

console.log(`Result = ${add(1, 2, 3, 4, 5, 6, 7, 8)} `);
```
