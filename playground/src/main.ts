import { createApp } from 'vue'
import Ellipsis from 'vue-next-ellipsis'
import App from './App.vue'

const app = createApp(App)

app.use(Ellipsis)

app.mount('#app')
