import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入Nut-UI
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'

import './assets/js/flexible'
import './assets/css/common.css'
import './assets/css/common.less'

Vue.config.productionTip = false

NutUI.install(Vue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
