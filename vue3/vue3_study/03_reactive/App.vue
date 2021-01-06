<template>
<h2>reactive</h2>
<!-- 
作用: 定义多个数据的响应式
const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
响应式转换是“深层的”：会影响对象内部所有嵌套的属性
内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

总结：如果操作代理对象，那么被代理对象内容也会响应改变。因此，如果想要在操作数据的时候页面随之变化，则需要操作代理对象。
      如果操作被代理对象，那么数据虽然修改，但是页面并不会随之变动。
 -->
<h2> 姓名：{{user.name}} </h2>
<h2> 年龄：{{user.age}} </h2>
<h2> 妻子：{{user.wife}} </h2>

<button @click="update">点击更新</button>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：显示用户相关信息，点击按钮，更新用户数据
  
  setup(){
    const obj = {
      name: "李雷",
      age: 18,
      wife: {
        name: "小红",
        age: 21,
        cars: ["五菱", "三轮"]
      }
    }

    //const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    const user = reactive(obj)

    const update = ()=>{
      user.name = "小明"
      console.log(user)
      //通过当前的代理对象找到目标对象的某个属性，更改属性中某个数组的数据
      user.wife.cars[0] = "雷克萨斯"
      //通过当前的代理对象找到目标对象的某个数组属性添加一个新的的数据,如果下表没有则null值补充
      user.wife.cars[2] = "hahaha"
    }

    return{
      user,
      update
    }

  }

});
</script>
