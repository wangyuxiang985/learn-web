(()=>{
//类
/* 
类的基本定义与使用
*/
class Greeter {
    // 声明属性
    message: string
  
    // 构造方法
    constructor (message: string) {
      this.message = message
    }
  
    // 一般方法
    greet (): string {
      return 'Hello ' + this.message
    }
  }
  
  // 创建类的实例
  const greeter = new Greeter('world')
  // 调用实例的方法
  console.log(greeter.greet())

  console.log("==============继承===========")
  class Animal {
    name: string
    
    constructor (name: string) {
      this.name = name
    }
  
    run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  
  }
  
  class Snake extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=5) {
      console.log('sliding...')
      super.run(distance)
    }
  }
  
  class Horse extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }
  
    // 重写父类型的方法
    run (distance: number=50) {
      console.log('dashing...')
      // 调用父类型的一般方法
      super.run(distance)
    }
  
    xxx () {
      console.log('xxx()')
    }
  }
  
  const snake = new Snake('sn')
  snake.run()
  
  const horse = new Horse('ho')
  horse.run()
  
  // 父类型引用指向子类型的实例 ==> 多态
  const tom: Animal = new Horse('ho22')
  tom.run()
  
  /* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
  const tom3: Snake = new Animal('tom3')
  tom3.run()
  /* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
  // const tom2: Horse = new Animal('tom2')
  // tom2.run()

  console.log("=========公共，私有与受保护的修饰符=========")
/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/
//readonly 修饰符:将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

/*
参数属性：
舍弃参数 name，仅在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员。 我们把声明和赋值合并至一处。
参数属性通过给构造函数参数前面添加一个访问限定符来声明。
使用 private 限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样
*/
console.log("===========参数属性========")
class Person2 {
    //构造函数中一旦使用了 readonly 修饰后，相当于当前类中就有了个 name 的属性成员
    constructor(readonly name: string) {
    }

    sayHi(){
        console.log("sayHi...",this.name)
    }
}

const p = new Person2('jack')
console.log(p.name)
p.sayHi()

console.log("==============存取器===========")
/*
TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
*/
class Person3 {
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName () {
        console.log("get 中。。。")
        return this.firstName + '-' + this.lastName
    }
    set fullName (value) {
        console.log("set 中。。。")
        const names = value.split('-')
        this.firstName = names[0]
        this.lastName = names[1]
    }
  }
  
  const p3 = new Person3()
  console.log(p3.fullName)
  
  p3.firstName = 'C'
  p3.lastName =  'D'
  console.log(p3.fullName)
  
  p3.fullName = 'E-F'
  console.log(p3.firstName, p3.lastName)

  console.log("=============静态属性============")
  //静态属性可以直接通过 类名.xxx 方式调用属性
  /* 
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
*/

class Person4 {
    name1: string = 'A'
    static name2: string = 'B'
}

console.log(Person4.name2)
console.log(new Person4().name1)

console.log("============抽象类=============")
/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法
*/

abstract class Animal2 {

    abstract cry ():void
  
    run () {
      console.log('run()')
    }
}
  
class Dog2 extends Animal2 {
    cry () {
      console.log(' Dog cry()')
    }
}
  
const dog2 = new Dog2()
dog2.cry()
dog2.run()


})()