import { createApp } from 'vue'
import App from './App.vue'

console.log('当前环境:', import.meta.env);

const app = createApp(App)
app.mount('#app')
