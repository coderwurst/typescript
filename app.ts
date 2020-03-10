// core type number
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

console.log(add(number1, number2));

// core type string
function findWord(input: string, searchTerm: string) {
  return input.indexOf(searchTerm) !== -1 ? 'word found' : 'word not found';
}

console.log(findWord('is this the end', 'is'));
console.log(findWord('is this the end', 'no'));

// core type boolean
function isTrue(value: boolean) {
  return value ? true : false;
}

// type error examples
console.log(isTrue(0));
console.log(isTrue(NaN));
console.log(isTrue(1));
