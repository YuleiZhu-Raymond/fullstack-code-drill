// Q1:结构一个对象并重命名字段
const user = { id: 1, username: "yulei", age: 26 };
const { username: name, age} = user;
console.log(name); // yulei

// Q2:从函数参数中使用解构和默认值
function greet({ name = "匿名", lang = "zh" }) {
    return lang === "en" ? `Hello, ${name}` : `你好, ${name}`
}
console.log(greet({}))


// Q3:箭头函数和普通函数this的区别
const obj = {
    value: 10,
    normalFunc() {
        return function () {
            console.log(this.value);
        }
    },
    arrowFunc() {
        return () => {
            console.log(this.value);
        };
    }
};

obj.normalFunc()();
obj.arrowFunc()();


// Q4:给定分数数组，取出所有及格分(>=60)，并计算平均分
const scores = [85, 59, 70, 90, 40];
const passed = scores.filter(score => score >= 60);
const avg = passed.reduce((a, b) =>  a + b, 0) / passed.length;
console.log(passed, avg);


// Q5:用map实现对象数组 -> 新数组（只保留姓名）
const students = [
    { name: "Anna", age : 20},
    { name: "Bob", age : 21},
];
const names = students.map(s => s.name);
console.log(names);


// Q6:合并两个对象 & 添加新字段
const a = { foo: 1};
const b = { bar: 2};
const merged = { ...a, ...b, baz: 3 };
console.log(merged);


// Q7：编写一个函数，传任意多个数字，返回他们的和
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

//Q8: 用promise模拟一个异步操作
function delayLog() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("异步操作完成");
            resolve();
        }, 1000);
    });
}

async function run() {
    console.log("开始");
    await delayLog();
    console.log("结束");
}
run();