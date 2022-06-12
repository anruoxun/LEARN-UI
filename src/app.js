import Vue from 'vue'
import Button from "./components/button.vue"
import Icon from "./components/icon.vue"
import ButtonGroup from "./components/button-group.vue"
import Switch from "./components/switch.vue"

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-switch', Switch)
new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    test(){
      console.log('click test')
    }
  }
})
