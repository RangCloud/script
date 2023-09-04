let memberArray = ["cat", "dog", "tiger"];
console.group("array loop");
let i = 0;
while (i < memberArray.length) {
  console.log(memberArray[i]);
  i = i + 1;
} // 배열은 인덱스로 출력

console.groupEnd("array loop");
let memberObject = {
  animal1: "cat",
  animal2: "dog",
  animal3: "tiger",
};
console.group("object loop");
for (let name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("object loop");

// 객체는 키 값에 있는 밸류 불러옴
