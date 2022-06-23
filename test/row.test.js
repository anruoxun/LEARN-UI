const expect = chai.expect
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在 ', () => {
    expect(Row).to.exist
  });

  it('接收 gutter 属性 ', (done) => {
    Vue.component('yl-row', Row)
    Vue.component('yl-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <yl-row gutter="20">
        <yl-col spam="12"></yl-col>
        <yl-col spam="12"></yl-col>
      </yl-row>
    `
    const vm = new Vue({
      el: div
    })

    // console.log(vm.$el.outerHTML)
    setTimeout(() => {
      // console.log(vm.$el.outerHTML)
      const row = vm.$el.querySelector('.yl-row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelector('.yl-col')
      expect(getComputedStyle(cols).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols).paddingRight).to.eq('10px')
      // 存在于异步代码时，要写done，不然在执行完同步将自动结束
      div.remove()
      vm.$destroy()
      done()
    }, 0)
  });
  it('接收 align 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  });
})
