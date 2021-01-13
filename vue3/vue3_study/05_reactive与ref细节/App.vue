<template>
<!-- reactive与ref细节 -->
<!-- 
    reactive与ref是Vue3的 composition API中2个最重要的响应式API
      1. ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
      2. 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
      3. ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
      4. reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
      5. ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
 -->
<h1>reactive与ref-细节</h1>
<h2>m1:{{m1}}</h2>
<h2>m2:{{m2}}</h2>
<h2>m3:{{m3}}</h2>
<hr>
<button @click="update">更新数据</button>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'App',

  setup(){
    const m1 = ref("我是m1啊")
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红"
      }
    })
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红"
      }
    })

    const update = ()=>{
      m1.value += "aaaaaaa"
      m2.wife.name += "aaaaaa"
      m3.value.wife.name += "aaaaaa"

      console.log(m1)
      console.log(m2)
      console.log(m3)
    }

    return{
      m1,
      m2,
      m3,
      update

    }
  }
  
});
</script>
