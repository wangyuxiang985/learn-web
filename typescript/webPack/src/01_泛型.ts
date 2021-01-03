(()=>{
//泛型 ：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

function createArray2 <T> (value: T, count: number) {
    const arr: Array<T> = []
    for (let index = 0; index < count; index++) {
      arr.push(value)
    }
    return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error

console.log("=======多个泛型参数的函数========")
//一个函数可以定义多个泛型参数
function swap <K,V> (a: K, b: V):[K,V]{
    return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log("result===>", result)
console.log(result[0].length, result[1].toFixed())

console.log("========泛型接口========")
/**
 *在定义接口时, 为接口中的属性或方法定义泛型类型
在使用接口时, 再指定具体的泛型类型
 */
interface IbaseCRUD <T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T
}
  
class User {
    id?: number; //id主键自增
    name: string; //姓名
    age: number; //年龄
  
    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }
}
  
class UserCRUD implements IbaseCRUD <User> {
    data: Array<User> = []
    
    add(user: User): void {
      user = {...user, id: Date.now()}
      this.data.push(user)
      console.log('保存user', user.id)
    }
  
    getById(id: number): User {
      return <User>this.data.find(user => user.id === id)
    }
  }
  
  
  const userCRUD = new UserCRUD()
  userCRUD.add(new User('tom', 12))
  userCRUD.add(new User('tom2', 13))
  console.log(userCRUD.data)

  console.log("=========泛型类==========")
  //在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))

  console.log("==========泛型约束========")
  //如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
  interface Lengthwise {
      //约定接口中有个属性length
    length: number;
  }
  
  // 指定泛型约束，保证了T中有length属性
  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
  }
  //我们需要传入符合约束类型的值，必须包含必须 length 属性
  fn2('abc')

})()