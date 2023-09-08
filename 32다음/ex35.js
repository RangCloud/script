function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

let Kim = new Person("kim", 10, 20, 30);
let Lee = new Person("lee", 10, 10, 10);
console.log("Kim.sum", Kim.sum());
console.log("Lee.sum", Lee.sum());

let d1 = new Date("2023-9-5");
console.log("d1,getFullYear()", d1.getFullYear());
console.log("d1,getMonth()", d1.getMonth() + 1);
console.log("d1,getDay()", d1.getDay());

console.log("Date", Date);

console.log("Person()", Person());
// constructor 객체 생성 함수 new
console.log("new Person()", new Person());
