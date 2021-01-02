(()=>{
//基本语法：
// let 变量名: 变量类型 = 值
let flag: boolean = true
console.log(flag)

//数字类型number
let a1: number = 10 //10进制
let a2: number = 0b1010 //二进制
let a3: number = 0o12 //八进制
let a4: number = 0xa //十六进制
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
//字符串类型string
let str1: string = "窗前明月光"
console.log(`${str1}`)
//ts中，变量一开始是什么类型，那么后期赋值的时候只能用什么类型，不允许其他类型的数据赋值给当前变量
//如果把严格模式关掉"strict": false, 的话，undefined和null可以看作其他类型的子类进行赋值

console.log("=====数组类型======")
//数组的定义方式有两种
//方式一 let 变量名: 变量类型[] = [value1, value2, value3]
let numArr: number[] = [1, 2, 4.3]
console.log(numArr)
//方式二： let 变量名: Array<变量类型> = [value1, value2, value3]
let strArr: Array<string> = ["我是", "好人"]
//ps:数组定义后，里面的数据类型存放必须和定义的数据类型一致，否则报错

//元组类型：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let arrTuple: [string, number, boolean] = ["hello", 11, false]
console.log(arrTuple)
console.log(arrTuple[0].toUpperCase())

console.log("========枚举=====")
//默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值
enum Gender{
    woman,
    man
}
console.log(Gender)
console.log(Gender.man)
console.log(Gender[0])

console.log("======any===void====")
//any any 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
//并且当你只知道一部分数据的类型时，any 类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据
let anyArr: any[] = [123, "dddd", false]
console.log(anyArr)

//void 类型 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
  }

console.log("==========object类型===========")
//object 表示非原始类型，也就是除 number，string，boolean之外的类型
function fn2(obj:object):object {
    console.log('fn2()', obj)
    return {}
    // return undefined
    // return null
  }
  console.log(fn2(new String('abc')))
  // console.log(fn2('abc') // error
  console.log(fn2(String))

  console.log("==========联合类型&类型断言&类型推断========")
  //联合类型（Union Types）表示取值可以为多种类型中的一种
  //类型断言： 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
  //类型断言方式一：<类型>值
  //类型断言方式一：值 as 类型  tsx中只能用这种方式

  //类型推断：TS会在没有明确的指定类型的时候推测出一个类型，1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

  //需求：定义一个一个函数得到一个数字或字符串值的长度
  function getLength(str: string | number):number{
      console.log("getLength()=>", str)

      //运用类型断言
      if((<string>str).length){
        //传入的是string类型，直接返回
        return (str as string).length
      }else{
        //number类型
        return str.toString().length
      }
  }

  console.log(getLength("111"))
  console.log(getLength(12345))

  


})()