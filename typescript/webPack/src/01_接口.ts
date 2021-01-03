(()=>{
//接口
//使用接口（Interfaces）来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)
/*
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/
/* 
需求: 创建人的对象, 需要对人的属性进行一定的约束
  id是number类型, 必须有, 只读的
  name是string类型, 必须有
  age是number类型, 必须有
  sex是string类型, 可以没有
*/
//定义人接口
interface IPerson{
    //在属性名前用 readonly 来指定只读属性，一旦赋值后再也不能被改变了
    readonly id: number
    name: string
    age: number
    //在可选属性名字定义的后面加一个 ? 符号,表示该属性在定义的时候可有可无
    sex?: string
}

const person1: IPerson = {
    id: 10,
    name: "zhangsan",
    age: 16,
}
console.log(person1)
person1.age = 19
person1.sex = "男"
console.log(person1)

console.log("==========函数类型==========")
/*
为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
*/
//接口可以描述函数类型(参数的类型与返回的类型)
interface ISearch{
    //只有参数列表和返回值类型的函数定义
    (source: string, subString: string): boolean
}

const mySearch: ISearch = function(source: string, subString: string): boolean{
    return source.search(subString) > -1;
}

console.log(mySearch("荣耀弟子白小纯","白小纯"))

console.log("=============类 类型================")
/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/
interface Alarm {
    alert(): any;
}
  
interface Light {
    lightOn(): void;
    lightOff(): void;
}

//一个接口可以继承多个接口
interface AlarmAndLight extends Alarm, Light{}

//类可以继承接口，但必须实现其中的方法
class Car implements AlarmAndLight{
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }

}

const car1 = new Car()
car1.alert()
car1.lightOn()
car1.lightOff()




})()