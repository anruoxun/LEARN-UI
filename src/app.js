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
  el: "#app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      switchVal: 0,
      switchVal2:0,
    };
  },
  methods: {
    switchBtn() {
      this.switchVal = this.switchVal == 1 ? 0 : 1;
    },
    switchBtn2() {
      this.switchVal2 = this.switchVal2 == 1 ? 0 : 1;
    },
  },
});
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  // 可以选择绑定在元素上测试
  // button.$mount('#test')
  // 可以放在内存
  button.$mount()
  let useElement = button.$el.querySelector('use')
  // console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-setting')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq("1")
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq("2")
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "setting",
    },
  });
  vm.$mount();
  let spy = chai.spy(function() {});
  vm.$on("click", spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
  // button.$el.remove();
  // button.$destroy();
}
