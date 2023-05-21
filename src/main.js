import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'animate.css';
import NProgress from 'nprogress'
const app = createApp(App)
NProgress.configure({
    easing: 'ease',
    showSpinner: false,
    startOnLoad: false
  });
app.use(createPinia())
app.use(router)
app.mount('#app')

