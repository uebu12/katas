// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
function sumOfDifferences(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }
  let decOrder = arr.sort((a, b) => b - a);
  let dif = decOrder.map(
    (currentValue, index) => currentValue - decOrder[index + 1]
  );
  dif.pop();
  return dif.reduce((total, num) => total + num);
}
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str) {
  return str.split("").reverse().join("");
}
//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks) {
  return Math.floor(marks.reduce((total, num) => total + num) / marks.length);
}
//https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript
function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);

  return (
    yourPoints >
    classPoints.reduce((total, num) => total + num) / classPoints.length
  );
}
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  let counter = 0;
  list.forEach((value) => {
    if (value.continent === "Europe" && value.language === "JavaScript") {
      counter++;
    }
  });
  return counter;
}
//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
function greetDevelopers(list) {
  list.map(
    (dev) =>
      (dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`)
  );
  return list;
}
//https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript
