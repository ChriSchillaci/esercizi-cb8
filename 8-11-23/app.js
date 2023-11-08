// ESERCIZIO 1

const sum = (firstNum, secondNum, thirdNum) => firstNum + secondNum + thirdNum;
const sub = (firstNum, secondNum, thirdNum) => firstNum - secondNum - thirdNum;
const mult = (firstNum, secondNum, thirdNum) => firstNum * secondNum * thirdNum;
const div = (firstNum, secondNum, thirdNum) => firstNum / secondNum / thirdNum;

// Made with if statements

// const calculator = (input, firstNum, secondNum, thirdNum) => {
//   if (input === "+") {
//     return sum(firstNum, secondNum, thirdNum);
//   } else if (input === "-") {
//     return sub(firstNum, secondNum, thirdNum);
//   } else if (input === "*") {
//     return mult(firstNum, secondNum, thirdNum);
//   } else if (input === "/") {
//     return div(firstNum, secondNum, thirdNum);
//   } else {
//     console.log("Something went wrong");
//   }
// };

// final try

const calculator = (cb, firstNum, secondNum, thirdNum) => {
  if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
    console.log("Inputs must be numbers");
  } else {
    console.log(cb(firstNum, secondNum, thirdNum));
  }
};
calculator(sub, 5, 5, 10);

// ESERCIZIO 2

const arrObj = [
  {
    id: Math.floor(Math.random() * 100000),
    name: "Pietro",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "Piero",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "Pierino",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "Petro",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
  },
];

// Map method returns a new array on the given array
const mappedArr = arrObj.map((el) => el);
console.log(mappedArr);

//ForEach method does not return a new array and iterates each element on the given array
arrObj.forEach((el) => console.log(el));

// ESERCIZIO 3 AVANZATO

array1 = [3, 6, 9, 12];
array2 = [5, 10, 15, 20];

const transformAndFilter = (firstArr, secondArr) => {
  const modifiedArray1 = firstArr.map((el) => el * 2);
  const modifiedArray2 = secondArr.map((el) => el + 5);

  const filteredArray1 = modifiedArray1.filter((el) => el > 10);
  const filteredArray2 = modifiedArray2.filter((el) => el % 2 === 0);

  // console.log('filtered mapped array1', firstArr)
  // console.log('filtered mapped array2', secondArr)
  console.log(filteredArray1, filteredArray2);
};

transformAndFilter(array1, array2);
