// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const list =[12,2,4,1,5,678,12,0,-1];
const filterOutOdds = (...nums)=> nums.filter((num)=> num % 2 === 0);
console.log(filterOutOdds(...list));


const  findMin =(...nums)=> nums.reduce((min,num)=> min < num? min:num);
console.log(findMin(...list));



const mergeObjects = (obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));



const doubleAndReturnArgs = (arr,...args)=>
{
const argsArry = args.map((num)=> num*2);

return [...arr,...argsArry];
}
console.log(doubleAndReturnArgs([1,2,3,4],10,12,14));




/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items)=> {
  const arr =[...items];
randIndex = Math.floor(Math.random() * items.length);
arr.splice(randIndex,1);
return arr;
}

/** Return a new array with every item in array1 and array2. */

const extend =(array1, array2)=>[...array1,...array2];



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal =(obj, key, val)=>{

obj[key] = val;
return {...obj};
}


console.log(addKeyVal({"cat": 3},"dog",3));


/** Return a new object with a key removed. */

const removeKey = (obj, key)=> {
newObj ={...obj};
delete newObj[key];
return newObj;
}
console.log(removeKey({"cat": 3,"dog": 3,"lizard":1},"lizard"));

/** Combine two objects and return a new object. */

const combine = (obj1, obj2)=>({...obj1,...obj2});
console.log(combine({a:1, b:2}, {c:3, d:4}));


/** Return a new object with a modified key and value. */

const update =(obj, key, val)=> {
  newObj ={...obj};
  newObj[key] = val;
  return newObj;
}
console.log(update({a:1, b:2},"a",3));
