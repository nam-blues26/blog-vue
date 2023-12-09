import { createApp } from 'vue'
import App from './App';
import router from './router';
import '../src/assets/css/style.css'
import '../node_modules/flowbite-vue'
import '../node_modules/flowbite'

createApp(App)
.use(router)
.mount('#app')
