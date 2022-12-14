import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


loadFonts()

const app = createApp(App)
app.use(router)
  .use(vuetify)
  .mount('#app')
