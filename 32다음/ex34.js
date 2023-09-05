let Kim = {
  name: "Kim",
  first: 10,
  second: 20,
  third: 30,
  sum: function () {
    return this.first + this.second + this.third;
  },
};

let Lee = {
  name: "Lee",
  first: 10,
  second: 20,
  third: 10,
  sum: function () {
    return this.first + this.second + this.third;
  },
};
// console.log("Kim.first, Kim.second ", Kim.sum(Kim.first, Kim.second));
console.log("Kim.first, Kim.second ", Kim.sum());
console.log("Lee.first, Lee.second ", Lee.sum());

let d1 = new Date("2023-9-5");
console.log("d1,getFullYear()", d1.getFullYear());
console.log("d1,getMonth()", d1.getMonth() + 1);
console.log("d1,getDay()", d1.getDay());
