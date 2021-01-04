//程序的主入口文件，ts文件 main.ts
//引入 createApp 函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
//引入 App 组件（所有组件的父级组件）
import App from './App.vue'
//创建 APP 应用，返回对象的实例对象，调用 mount 方法进行挂载，挂载到public/index.html页面中div中id=app的标签下
createApp(App).mount('#app')
