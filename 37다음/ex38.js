class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum = function () {
    return "prototype : " + (this.first + this.second);
  };
}

let Kim = new Person("kim", 10, 20);
console.log("Kim", Kim);

console.log("Kim", Kim.sum());
Kim.sum = function () {
  return "this : " + (this.first + this.second);
};
let Lee = new Person("lee", 10, 10);
console.log("Kim.sum()", Kim.sum());
console.log("Lee.sum()", Lee.sum());
