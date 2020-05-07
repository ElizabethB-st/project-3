//jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//Req. 4b
let bitBatBotOrNot = n => {
  let result = "";

  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    result = "Not";
  }
  return result;
};

//Req. 4c
let findAllbitBatBotOrNots1 = arr => {
  let resultArr = [];
  let myFunction = arr => {
    let result = `${arr.valueOf()}: ` + bitBatBotOrNot(arr);
    return result;
  };
  //using arry.map method
  resultArr = arr.map(myFunction);
  return resultArr;
};

//Req. 4d
let findAllbitBatBotOrNots2 = arr => {
  let resultArr = [];
  //using a for loop
  for (var i = 0; i < arr.length; i++) {
    //using arry.push method
    resultArr.push(`${arr[i]}: ` + bitBatBotOrNot(arr[i]));
  }
  return resultArr;
};

//Req. 4e
let findAllbitBatBotOrNots3 = arr => {
  let resultArr = [];
  //use for..of statement
  for (var i of arr) {
    //using arry.push method
    resultArr.push(`${i}: ` + bitBatBotOrNot(i));
    i++;
  }
  return resultArr;
};

//Req. 4f
let findAllbitBatBotOrNots4 = arr => {
  let resultArr = [];
  let newArr;
  //Using forEach method
  newArr = arr.forEach((item, i) => {
    //using arry.push method
    resultArr.push(`${arr[i]}: ` + bitBatBotOrNot(arr[i]));
  });
  return resultArr;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
