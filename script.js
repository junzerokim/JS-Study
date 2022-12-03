let person = ['john', 'jun', 'peter', 'jun'];
let person2 = new Set(person);

let person3 = [...person];
console.log(person3);

person2.add('james'); // 추가
person2.delete('peter'); // 제거
person2.has('john'); // 유무 확인

console.log(person2);

// let person = new Map();
// person.set('name', 'Kim');
// person.set('age', 30);

// console.log(person.get('name'));
