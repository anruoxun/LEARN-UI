const expect = chai.expect
import Vue from 'vue'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在 ', () => {
    expect(Col).to.exist
  });

  it('接收 span 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '12'
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 offset 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '12'
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-offset-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 xs 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xs: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-xs-12')).to.eq(true)
    expect(element.classList.contains('yl-offset-xs-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 sm 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        sm: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-sm-12')).to.eq(true)
    expect(element.classList.contains('yl-offset-sm-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 md 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        md: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-md-12')).to.eq(true)
    expect(element.classList.contains('yl-offset-md-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 lg 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        lg: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-lg-12')).to.eq(true)
    expect(element.classList.contains('yl-offset-lg-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });

  it('接收 xl 属性 ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xl: {span: 12, offset: 12}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('yl-col-xl-12')).to.eq(true)
    expect(element.classList.contains('yl-offset-xl-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
})
