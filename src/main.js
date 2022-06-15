import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import installElementPlus from './plugins/element.js'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'

const app = createApp(App)
// installElementPlus(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
//全局变量命名
app.config.globalProperties.$mysay = function (msg) { alert(msg + "你好") }
