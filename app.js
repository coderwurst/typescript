// core type number
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
console.log(add(number1, number2));
// core type string
function findWord(input, searchTerm) {
    return input.indexOf(searchTerm) !== -1 ? 'word found' : 'word not found';
}
console.log(findWord('is this the end', 'is'));
console.log(findWord('is this the end', 'no'));
// core type boolean
function isTrue(value) {
    return value ? true : false;
}
console.log(isTrue(0));
console.log(isTrue(NaN));
console.log(isTrue(1));
