// class Parent {}

// Parent.prototype.name = 'Kim';

// let object = new Parent();

// for (let key in object) {
//   console.log(object[key]);
// }

// let array = [2, 3, 4, 5];

// for (let key of array) {
//   console.log(key);
// }

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of data) {
  for (let j of data) {
    console.log(`${i + 1} x ${j} = ${(i + 1) * j}`);
  }
}
