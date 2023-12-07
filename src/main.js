import { createApp } from 'vue'
import App from './App';
import router from './router';
import '../src/assets/css/style.css'

createApp(App)
.use(router)
.mount('#app')
