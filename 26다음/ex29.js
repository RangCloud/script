let memberArray = ["cat", "dog", "tiger"];
console.log("memberArray[2]", memberArray[1]);

let memberObject = {
  animal1: "cat",
  animal2: "dog",
  animal3: "tiger",
};

memberObject.animal2 = "lion";
console.log("memberObject.animal2", memberObject.animal2);
console.log("memberObject[animal2]", memberObject["animal2"]);
delete memberObject.animal1;
console.log("after delete memberObject.animal1", memberObject.animal1);
