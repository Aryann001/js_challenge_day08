// Task 1
const person = {
  name: "Aryan",
  age: 19,
};

const personStr = `${person.name} is ${person.age} years old`;
console.log(personStr);

// task 2
const multiLineStr = `fbrewfberiugfewui
fberiwhnihgf
frkinewgfirej
fewrnofrein`;

console.log(multiLineStr);

// Task 3
const numArr = [1, 2, 3, 4, 5];

const [a, b] = numArr;

console.log(a);
console.log(b);

// Task 4
const book = {
  title: "JS Challenge",
  author: "Aryan",
  year: 2024,
};

const { title, author } = book;

console.log(title);
console.log(author);

// task 5
const newNumArr = [...numArr, 9, 8, 7, 6];

console.log(newNumArr);

// Task 6
function sum(...rest) {
  return rest.reduce((acc, num) => acc + num, 0);
}

let result = sum(1, 2, -1, -100, 1000);
console.log(result);

// Task 7
function multiply(x, y = 1) {
  return x * y;
}

result = multiply(2, 10);
console.log(result);

result = multiply(2);
console.log(result);

// Task 8
const obj = {
  name: "Aryan",
  age: 19,
  printName: function () {
    console.log(this.name);
  },
  printAge: function () {
    console.log(this.age);
  },
};

console.log(obj);

// Task 9
const var1 = "isStudent";
const var2 = "age";

const obj2 = {
  name: "Aryan",
  [var1]: true,
  [var2]: 19,
};

console.log(obj2);
