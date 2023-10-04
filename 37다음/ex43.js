let superObj = { superVal: "super" };
//let subObj = { subVal: "sub" };
//subObj.__proto__ = superObj;
let subObj = Object.create(superObj);
subObj.subVal = "sub";
debugger;
console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal => ", superObj.superVal);

kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
lee = {
    name:'lee',
    first:10, second:10
}
lee.__proto__= kim;
console.log(kim.sum())
console.log(lee.sum())