// let arr = [2, 3, 4];
// let [a, b, c = 10] = [];

// let obj = { name: 'Kim', age: 30 };
// let name = obj.name;
// let age = obj.age;

// let { name: 나이 } = { name: 'Kim' }; // default parameter

// let name = 'Kim';
// let age = 30;

// let obj = { name: name, age: age };
// let obj = { name, age };

let obj = { name: 'Kim', age: 30 };

function 함수([name, age]) {
  console.log(name);
  console.log(age);
}

함수([1, 2]);
