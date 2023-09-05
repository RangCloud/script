let Kim = (K = {
  name: "Kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
});
// console.log("Kim.first, Kim.second ", Kim.sum(Kim.first, Kim.second));
console.log("Kim.first, Kim.second ", K.sum());
