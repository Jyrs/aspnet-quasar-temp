import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, QToggle, QBtn } from 'quasar'

import quasarLang from 'quasar/lang/ru'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// A few examples for animations from Animate.css:
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


let app = createApp(App).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  components: [QToggle, QBtn]
});
app.mount('#app');
