(() =>{

    //声明str这个参数为string类型
    function sayHello(str:string){
        return "你好：" + str;
    }
    let text = "typescript!"

    console.log(sayHello(text))
    // 总结：
    //ts文件中如果直接书写js的代码。那么在html中直接引入ts文件，谷歌浏览器可以正常使用
    //如果ts文件中含有ts的语法，就需要执行 tsc 将这个ts文件转变为对应的js文件，在html中引入这个js文件

})()