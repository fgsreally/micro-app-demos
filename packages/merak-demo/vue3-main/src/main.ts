import '@/styles/index.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { listenReceiveMessage } from '@/utils/messageListener'
import { initMerakEmitter } from './utils/merak'
const app = createApp(App)

app.use(createPinia())
app.use(router)
initMerakEmitter()

listenReceiveMessage()
app.mount('#app')
