function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

let Kim = new Person("kim", 10, 20);
Kim.sum = function () {
  return "modified : " + (this.first + this.second);
};
let Lee = new Person("lee", 10, 10);
Lee.sum = function () {
  return "modified : " + (this.first + this.second);
};
console.log("Kim.sum()", Kim.sum());
console.log("Lee.sum()", Lee.sum());
