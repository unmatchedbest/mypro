import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

// normalize.css
import 'normalize.css/normalize.css';

import VConsole from 'vconsole';
if (process.env.NODE_ENV !== 'local_production') {
  new VConsole();
}

const app = createApp(App);
app.use(router)
  .use(Vant)
  .mount('#app');
