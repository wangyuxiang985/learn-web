<template>
<!-- 计算属性与监视 -->
<!-- 
  computed函数:
    与computed配置功能一致
    只有getter
    有getter和setter
  watch函数
    与watch配置功能一致
    监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调，监听多个非响应式数据时每个非响应式数据前边需添加 ()=>监听数据
    默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
    通过配置deep为true, 来指定深度监视
  watchEffect函数
    不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
    默认初始时就会执行第一次, 从而可以收集需要监视的数据
    监视数据发生变化时回调
 -->

<h1>计算属性与监视</h1>
  fistName: <input v-model="user.firstName"/><br>
  lastName: <input v-model="user.lastName"/><br>
  <hr>
  fullName1: <input v-model="fullName1"/><br>
  fullName2: <input v-model="fullName2"><br>
  fullName3: <input v-model="fullName3"><br>


</template>

<script lang="ts">

import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';
export default defineComponent({
  name: 'App',

  setup(){
    const user = reactive({
      firstName: "诸葛",
      lastName: "楠楠"
    })

    //一个回调函数，则只有getter的计算属性 
    const fullName1 = computed(()=>{
      return user.firstName + "_" + user.lastName
    })

    // 放置一个对象则有getter与setter的计算属性
    const fullName2 = computed({
      get () {
        console.log('fullName2 get')
        return user.firstName + '_' + user.lastName
      },
      set (value: string) {
        console.log('fullName2 set')
        const names = value.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    //用监视watch的方式赋值
    const fullName3 = ref("")
    //watch函数默认第一次不执行，只有被监视对象改变后才会执行。但是可以设置
    // watch(user,(user)=>{
    //   console.log("========",user)
    //   fullName3.value = user.firstName + '_' + user.lastName
    // }, {
    //   immediate: true,  // 是否初始化立即执行一次, 默认是false
    //   deep: true, // 是否是深度监视, 默认是false
    // })

// 也是一种监视，不需要配置immediate，本身默认会执行监视，并且默认执行一次
    watchEffect(()=>{
      fullName3.value = user.firstName + '_' + user.lastName
    })

    //watch也可以监听多个数据，采用[]数组
    //当我们使用watch监听非响应式数据的时候，监听对象需要修改为 ()=>监听对象 形式
    watch([()=>user.firstName,()=>user.lastName],()=>{
      console.log("监听多个树啦=========")
    })

    return{
      user,
      fullName1,
      fullName2,
      fullName3
      

    }
  }
  
});
</script>
