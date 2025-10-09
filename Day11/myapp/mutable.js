
const obj = { personId: 1, personName: "pradeep"};
//object is same only value is changed
obj.personId = 2;


console.log(obj);

const arr = ['a', 'b'];
//object is same only item is added
arr.push('c'); 
arr[0] = 'd';

console.log(arr);

//-------------------------------
const obj1 = {personId: 1, personName: 'pradeep shet'};

//copy the object & overwrite/extend the property
const obj1Copy = {
    ...obj1, personId: 2, address: 'mumbai'
}
console.log('Immutable=', obj1Copy, obj1);

const arr1 = ['a','b'];
//create new copy of array & add then new item
const arr1Copy = [...arr1, 'c']; 
const  arr2Copy = arr1.concat('d');
console.log('Immutable', arr2Copy);