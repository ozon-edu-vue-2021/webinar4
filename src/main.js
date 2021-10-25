import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Notifications from 'vue-notification'

import { LoggerMixin } from '@/components/mixins/GlobalLoggerMixin';


library.add(faEye)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Notifications)



Vue.mixin(LoggerMixin);




new Vue({
  render: h => h(App),
}).$mount('#app')
