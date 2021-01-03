(()=>{
//函数
/**
 * 函数是 JavaScript 应用程序的基础，它帮助你实现抽象层，模拟类，信息隐藏和模块
 * TypeScript 为 JavaScript 函数添加了额外的功能，让我们可以更容易地使用。
 */
/*
js中函数的通常定义
// 命名函数
function add(x, y) {
    return x + y
}
// 匿名函数
let myAdd = function(x, y) { 
    return x + y;
}
*/
//ts中函数定义，可以给上面的函数加上参数及返回值类型
//命名函数
function add(x: number, y: number): number {
    return x + y
}
//匿名函数
let myAdd = function(x: number, y: number): number { 
    return x + y
}

//ts中完整的函数类型书写格式：
//myAdd2:变量名，函数myAdd2
//(x: number, y: number) => number ：当前这个函数的函数类型
//function(x: number, y: number): number {return x + y} ： 相当于符合上面这个函数类型的值
let myAdd2: (x: number, y: number) => number = 
function(x: number, y: number): number {
  return x + y
}

console.log("============可选参数和默认参数=============")
/*
 * TypeScript 里的每个函数参数都是必须的。 这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。
 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 undefined 时。 它们叫做有默认初始化值的参数
 */
function buildName(firstName: string = "小红", lastName?: string): string{
    if(lastName){
        return firstName + "_" + lastName
    }else{
        return firstName
    }
}
console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())

console.log("===========剩余参数============")
/*
必要参数，默认参数和可选参数有个共同点：它们表示某一个参数.
有时，同时操作多个参数，或者并不知道会有多少参数传递进来。 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。
在 TypeScript 里，你可以把所有参数收集到一个变量里：
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 
编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，可以在函数体内使用这个数组。
... 只能放到最后
 */
function info(str1: string, ...args: string[]): void{
    console.log(str1 + "====", args)
}
info('abc', 'c', 'b', 'a')

console.log("============函数重载===========")
/*
函数重载: 函数名相同, 而形参不同的多个函数
在JS中, 由于弱类型的特点和形参与实参可以不匹配, 是没有函数重载这一说的 但在TS中, 与其它面向对象的语言(如Java)就存在此语法

需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
*/
//重载函数声明 经过重载函数声明后，ts就可以在编译期检测传入参数是否合法
function add3(x: string, y: string): string
function add3(x: number, y: number): number

// 定义函数实现
function add3(x: string | number, y: string | number): string | number{
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if(typeof x === "string" && typeof y === "string"){
        return x + y
    }else if(typeof x === "number" && typeof y === "number"){
        return x + y
    }else{
        return "add3 error"
    }
}

console.log(add3(1, 2))
console.log(add3('a', 'b'))
//经过函数声明后，下面两个报错
// console.log(add3("aa",22))
// console.log(add3(22,"bb"))


})()