
const uniqueArray = require('./uniqueArray');
const defineMyMap = require('./myMap');
const createCounter = require('./createCounter');
const useState = require('./useStateMock');

defineMyMap();

console.log(" Test: uniqueArray");
console.log(uniqueArray([1, 2, 2, 3, 4, 3]));

console.log(" Test: myMop");
const arr = [1, 2, 3];
const result = arr.myMap(x => x * 2);
console.log*(result);

console.log(" Test: createCounter");
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2        
console.log(counter()); // 3

console.log(" Test: useStateMock");
const [getCount, setCount] =useState(10);
console.log(getCount());
setCount(20);
console.log(getCount());