import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { store } from './store/store.js'

import App from './App.vue'
import router from './router'

import './assets/style/main.scss'
import './assets/style/setup/_typography.scss'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')
