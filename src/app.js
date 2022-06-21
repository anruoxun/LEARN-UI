import Vue from 'vue'
import Button from "./components/button.vue"
import Icon from "./components/icon.vue"
import ButtonGroup from "./components/button-group.vue"
import Switch from "./components/switch.vue"
import Input from "./components/input.vue"
import Row from "./components/Row.vue"
import Col from "./components/Col.vue"

Vue.component('yl-button', Button)
Vue.component('yl-icon', Icon)
Vue.component('yl-button-group', ButtonGroup)
Vue.component('yl-switch', Switch)
Vue.component('yl-input', Input)
Vue.component('yl-row', Row)
Vue.component('yl-col', Col)

new Vue({
  el: "#app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      switchVal: 0,
      switchVal2: 0,
      input1: 'test'
    };
  },
  methods: {
    switchBtn() {
      this.switchVal = this.switchVal == 1 ? 0 : 1;
    },
    switchBtn2() {
      this.switchVal2 = this.switchVal2 == 1 ? 0 : 1;
    },
    inputBlur1(value, e) {
      console.log(value, e)
    }
  },
});

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
//
// const expect = chai.expect
// try {
//
// // 单元测试
//   {
//     // 测试按钮含有icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     // 可以选择绑定在元素上测试
//     // button.$mount('#test')
//     // 可以放在内存
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     // console.log(useElement)
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-setting')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#icon-loading')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq("1")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         iconPosition: 'right'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq("2")
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//       propsData: {
//         icon: "setting",
//       },
//     });
//     vm.$mount();
//     let spy = chai.spy(function () {
//     });
//     vm.$on("click", spy);
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
//     // vm.$el.remove();
//     // vm.$destroy();
//   }
// } catch (error) {
//   window.errors = [error]
// } finally {
//   window.errors ? console.log(window.errors):''
// }
