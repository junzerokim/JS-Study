let symbol1 = Symbol('hello');

let weight = Symbol('secret weight');
let height = Symbol('secret height');

let person = { name: 'Kim' };
person.weight = 70;
person[weight] = 80; // enumerable 하지 않기 때문에 반복문에 출력되지 않는다.
person[height] = 175; // enumerable 하지 않기 때문에 반복문에 출력되지 않는다.

for (let key in person) {
  console.log(person[key]);
}
