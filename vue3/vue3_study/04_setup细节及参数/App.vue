<template>

  <h2>App父级组件</h2>
  <h3>msg: {{msg}}</h3>

  <button @click="msg += 'hahah'">更新msg</button>

  <hr>

  <Child :msg="msg" msg2="子级没有props接收的消息" msg3="啦啦啦啦 msg3" @xxx="xxx"/>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
//引入子级组件Child
import Child from './components/Child.vue';
export default defineComponent({
  name: 'App',
  //注册子级组件
  components: {
    Child
  },

  setup(){
    const msg = ref("嘻嘻嘻")

    function xxx(txt: string){
      msg.value += txt
    }

    return{
      msg,
      xxx
    }
  }

});
</script>
