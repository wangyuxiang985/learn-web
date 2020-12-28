(()=>{

    interface Ipeople{
        name:string
        age:number
    }

    class People{
        name:string
        age:number
        sex:string

        constructor(name:string, age:number, sex:string){
            this.name = name
            this.age = age
            this.sex = sex
        }
    }

    class Woman extends People{
        constructor(name:string, age:number){
            super(name,age,"女")
        }
    }

    function show(people:Ipeople){
        return people.name + "_" + people.age
    }

    const people  = {
        name : "张三",
        age : 15,
        sex : "男"
    }

    const xiaohua = new Woman("小花",15)

    console.log(show(people))
    console.log(xiaohua.sex)


})()