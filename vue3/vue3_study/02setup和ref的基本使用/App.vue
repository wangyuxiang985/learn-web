<template>
<h2>setup和ref基本使用</h2>
<!-- 
setup：
  新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

ref:
  作用: 定义一个数据的响应式
  语法: const xxx = ref(initValue):
  创建一个包含响应式数据的引用(reference)对象
  js中操作数据: xxx.value
  html模板中操作数据: 不需要.value
  一般用来定义一个基本类型的响应式数据

 -->
 <h3>{{count}}</h3>
 <button @click="updateCount">点击增加</button>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：打开页面后显示一个数据，点击按钮数据递增
  //vue2的方式
  /* 
  data(){
    return{
      count: 0
    }
  },
  methods:{
    updateCount(){
      this.count++
    }
  }
  */

 //vue3的方式
 //setup是组合API的入口函数
 setup(){
   //定义变量count，但是此时count变量并不是一个响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
  //  let count = 0
  //定义一个Ref对象
  const count = ref(0)

   function updateCount(){
     console.log("count++ ...")
    //  count++
    count.value++
   }

   return{
     count,
     updateCount
   }
 }


});
</script>
